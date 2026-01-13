import GameCard from "./GameCard";
import type { OfferCard } from "../types/OfferCard";
import "./GameGrid.css";

type GameGridProps = {
    cards: OfferCard[];
}

function GameGrid({ cards }: GameGridProps) {
    return (
        <div className="grid-container">
            <div className="game-grid">
                {cards.map((c) => (
                    <GameCard key={c.offerId} card={c} />
                ))}
            </div>
        </div>
    );
}

export default GameGrid;