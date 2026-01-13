import SearchBar from "./SearchBar";
import "./NavBar.css";
import logo from "../assets/eneba.png";
import flag from "../assets/Flag_of_Lithuania.svg.png";
import profilePicture from "../assets/Spiderman.png";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";

type NavbarProps = {
    query: string;
    onQueryChange: (value : string) => void;
}

export default function Navbar({ query, onQueryChange }: NavbarProps) {
    return (
        <header className="navbar">
            <div className="parent-container navbar-inner">
                <div className="navbar-left">
                    <img className="navbar-logo"
                    src={logo} alt="Eneba"
                    style={{ cursor: "pointer" }} 
                    onClick={() => window.location.href="/"}> 
                    </img>
                    <SearchBar value={query} onChange={onQueryChange} />
                </div>

                <div className="navbar-right">
                    <button className="navbar-locale">
                        <img className="navbar-flag" src={flag} alt="Lithuania Flag"></img>
                        <p className="locale-text">English EU | EUR</p>
                    </button>

                    <div className="navbar-icons">
                        <button className="navbar-iconBtn" type="button"><CiHeart /></button>
                        <button className="navbar-iconBtn" type="button"><LuShoppingCart /></button>
                        <button className="navbar-iconBtn" type="button">
                            <img className="profile-picture" src={profilePicture} alt="Profile picture"></img>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}