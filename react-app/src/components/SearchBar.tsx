import "./SearchBar.css";
import { useRef } from "react";

import { CiSearch } from "react-icons/ci";

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange}: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleIconClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="input-wrapper">
            <button type="button" onClick={handleIconClick}>
                <CiSearch id="search-icon" />
            </button>
            <input
                ref={inputRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Ieškoti žaidimų, papildymų ir daugiau"
            />
        </div>
    );
}