import type { OfferCard } from "../types/OfferCard";
import "./GameCard.css";
import { CiHeart } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";


type GameCardProps = {
    card: OfferCard;
};

function GameCard({card} : GameCardProps){
    return (
        <div className="game-card">
            <div className="game-card-image-wrap">
                {card.cashback_amount > 0 && (
                    <div className="game-card-cashback-container">
                        <MdOutlineSettingsBackupRestore className="game-card-cashback-icon"/>
                        <div className="game-card-cashback-text">Cashback </div>
                    </div> 
                )}
                <div className="game-card-platform">{card.platform}</div>
                <img className="game-card-image" 
                    src={card.image_url} alt="Game Image" />
            </div>
            <div className="game-card-body">

                <div className="game-card-title">{card.title} ({card.platform}) {card.store} {card.region}</div>

                <div className="game-card-region">
                    <span>{card.region}</span>
                </div>

                <div className="game-card-price-row">
                    <div className="game-card-from-price">From</div>

                    <div className="game-card-inline">
                        {card.discount_percent > 0 && (
                            <>
                                <span className="game-card-old-price">€ {Number(card.original_price).toFixed(2)}</span>
                                <span className="game-card-discount-percent">-{card.discount_percent}%</span>
                            </>
                        )}
                    </div>
                </div>
                <div className="game-card-final-price-information">
                    <div className="game-card-final-price">€{Number(card.final_price).toFixed(2)}</div>
                    <IoIosInformationCircleOutline className="game-card-information"/>
                </div>      

                {card.cashback_amount > 0 && (
                    <div className="game-card-cashback-amount">
                        Cashback: €{Number(card.cashback_amount).toFixed(2)}
                    </div>
                )}
                <div className="game-card-likes-container">
                    <div className="game-card-heart-icon"><CiHeart /></div>
                    <div className="game-card-likes">{card.likes}</div>
                </div>
            </div>
        </div>
    )
}

export default GameCard;