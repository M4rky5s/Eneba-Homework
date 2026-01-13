import {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/NavBar";
import ResultsFound from "./components/ResultsFound";
import GameGrid from "./components/GameGrid";

type OfferCard = {
  offerId: number;
  gameId: number;
  title: string;
  image_url: string;
  platform: string;
  store: string;
  original_price: number;
  final_price: number;
  discount_percent: number;
  cashback_amount: number;
  region: string;
  likes: number;
};

export default function App(){
  const [cards, setCards] = useState<OfferCard[]>([]);
  const [error, setError] = useState<string>("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const search = query.trim();
    setLoading(true);
    const url = 
      search.length > 0
        ? `http://localhost:3001/list?search=${encodeURIComponent(search)}`
        : "http://localhost:3001/list";

    axios
      .get<OfferCard[]>(url)
      .then((res) => {
        setCards(res.data);
        setError("");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  if(error) return <div>Error: {error}</div>;

  return (
    <div className="parent-container">
      <Navbar query={query} onQueryChange={setQuery} />

      <ResultsFound 
        count={cards.length}
        query={query}
        loading={loading}
        error={error}
      />
      <GameGrid cards={cards}/>
    </div>
  );
}