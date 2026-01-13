-- Extensions (optional, for fuzzy search)
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Games table
CREATE TABLE IF NOT EXISTS games (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Game offers table
CREATE TABLE IF NOT EXISTS game_offers (
  id SERIAL PRIMARY KEY,
  game_id INT NOT NULL REFERENCES games(id) ON DELETE CASCADE,
  platform TEXT NOT NULL,
  store TEXT NOT NULL,
  original_price_eur NUMERIC(10,2) NOT NULL,
  discount_percent INT DEFAULT 0,
  cashback_percent INT DEFAULT 0,
  currency TEXT DEFAULT 'EUR',
  region TEXT,
  likes INT,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE (game_id, platform, store)
);

-- Helpful indexes
CREATE INDEX IF NOT EXISTS idx_games_title ON games USING gin (title gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_offers_game_id ON game_offers (game_id);