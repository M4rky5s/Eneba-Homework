import "./SearchBar.css";
import { useRef } from "react";

import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange}: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearchIconClick = () => {
        inputRef.current?.focus();
    };

    const handleClearIconClick = () => {
        onChange("");
        inputRef.current?.focus();
    };

    return (
        <div className="input-wrapper">
            <button type="button"
                    onClick={handleSearchIconClick}
                    className="icon-btn"
                    aria-label="Focus search"
            >
                <CiSearch id="search-icon" />
            </button>
            <input
                ref={inputRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Ieškoti žaidimų, papildymų ir daugiau"
            />

            {value.trim().length > 0 && (
                <button
                    type="button"
                    onClick={handleClearIconClick}
                    className="clear-btn"
                    aria-label="Clear search"
                >
                    <IoClose size={26}/>
                </button>
            )}
        </div>
    );
}