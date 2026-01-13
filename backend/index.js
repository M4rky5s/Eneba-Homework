require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const { Pool } = require('pg');

const hasDbUrl =
    typeof process.env.DATABASE_URL === "string" &&
    process.env.DATABASE_URL.trim().length > 0;

const isLocalDb =
    hasDbUrl && process.env.DATABASE_URL.includes("localhost");

const pool = process.env.DATABASE_URL
    ? new Pool({
        connectionString: process.env.DATABASE_URL.trim(),
        ssl: isLocalDb ? false : { rejectUnauthorized: false },
    })
    : new Pool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
});

app.use(cors());

pool.connect((err, client, release) => {
    if(err) {
        return console.error(
            'Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if(err) {
            return console.error(
                'Error executing query', err.stack)
        }
        console.log('Connected to Database!')
    })
})

app.get('/list', async (req, res) => {
    try{
        const search = (req.query.search || '').trim();

        const sqlSelectEverything = `
            SELECT
                o.id AS offer_id,
                g.id AS game_id,
                g.title,
                g.image_url,
                o.platform,
                o.store,
                o.original_price_eur,
                o.discount_percent,
                o.cashback_percent,
                o.region,
                o.likes
            FROM games g
            JOIN game_offers o ON o.game_id = g.id
        `;

        const threshold = Number(req.query.threshold ?? 0.25);

        const query = search
            ? {
                text: `
                    ${sqlSelectEverything}
                    WHERE 
                        (g.title ILIKE '%' || $1 || '%')
                        OR (similarity(g.title, $1) > $2)
                    ORDER BY
                        similarity(g.title, $1) DESC,
                        o.id DESC
                    LIMIT 100
                `,
                values: [search, threshold],
            }
            :{
                text: `
                    ${sqlSelectEverything}
                    ORDER BY o.id DESC
                    LIMIT 100
                `,
                values: [],
            };
        
        const result = await pool.query(query);
        
        const cards = result.rows.map(row => {
            const original = Number(row.original_price_eur);
            const discount = row.discount_percent;
            const cashbackPercent = row.cashback_percent;

            const finalPrice = original * (1 - discount / 100);
            const cashbackAmount = finalPrice * (cashbackPercent / 100);

            return {
                offerId: row.offer_id,
                gameId: row.game_id,
                title: row.title,
                image_url: row.image_url,
                platform: row.platform,
                store: row.store,
                original_price: original,
                final_price: Number(finalPrice.toFixed(2)),
                discount_percent: discount,
                cashback_amount: Number(cashbackAmount.toFixed(2)),
                region: row.region,
                likes: row.likes,
            };
        });
        
        res.json(cards);
    } catch(err) {
        console.error("DB error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
})