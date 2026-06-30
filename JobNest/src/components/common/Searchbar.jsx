import { useEffect, useRef } from "react";

export default function SearchBar({ 
    placeholder, 
    onSearch, 
    className = "" 
    }){


    const searchBar = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.search.value;
        onSearch(e.target.search.value);
    };

    const handleChange = (e) => {
        onSearch(e.target.value);
    };

    useEffect(()=>{
        searchBar.current.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit} className={`d-flex ${className}`}>
        <input
            name="search"
            ref={searchBar}
            onChange={(e) => handleChange(e)}
            className="form-control"
            placeholder={placeholder}
        />

        <button className="btn btn-outline-primary ms-2">
            Search
        </button>
        </form>
    );
}