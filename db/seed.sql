INSERT INTO games (id, title, image_url) VALUES
(1, 'Split Fiction', 'https://i.imgur.com/wEYUXz4.png'),
(2, 'FIFA 23', 'https://i.imgur.com/koyNLdx.png'),
(3, 'Red Dead Redemption 2', 'https://i.imgur.com/RR36grf.png')
ON CONFLICT (id) DO NOTHING;

-- Game offers
INSERT INTO game_offers
(game_id, platform, store, original_price_eur, discount_percent, cashback_percent, region, likes)
VALUES
(1, 'PC', 'Steam Key', 41.99, 18, 5, 'GLOBAL', 1102),
(1, 'PS5', 'PlayStation Store Key', 45.99, 20, 6, 'EUROPE', 123),
(1, 'PS4', 'PlayStation Store Key', 45.99, 15, 5, 'ASIA', 1512),
(1, 'Xbox', 'Xbox Live Key', 49.99, 0, 0, 'GLOBAL', 126),
(1, 'Nintendo', 'eShop Key', 47.99, 10, 4, 'EUROPE', 1764),

(2, 'PC', 'EA App Key', 39.99, 50, 10, 'ASIA', 345),
(2, 'PS5', 'PlayStation Store Key', 39.99, 45, 9, 'GLOBAL', 179),
(2, 'PS4', 'PlayStation Store Key', 39.99, 40, 9, 'EUROPE', 237),
(2, 'Xbox', 'Xbox Live Key', 39.99, 45, 8, 'GLOBAL', 547),
(2, 'Nintendo', 'eShop Key', 39.99, 40, 7, 'ASIA', 876),

(3, 'PC', 'Steam Key', 59.99, 33, 8, 'NORTH AMERICA', 452),
(3, 'PS5', 'PlayStation Store Key', 58.99, 20, 10, 'EUROPE', 465),
(3, 'PS4', 'PlayStation Store Key', 45.99, 25, 3, 'GLOBAL', 217),
(3, 'Xbox', 'Xbox Live Key', 55.99, 20, 10, 'GLOBAL', 567),
(3, 'Nintendo', 'eShop Key', 55.99, 30, 5, 'EUROPE', 347);