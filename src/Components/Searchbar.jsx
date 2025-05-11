export default function SearchBar({ filmName, onSearch, handleChange }) {
    return (
        <div className="search">
            <input
                value={filmName}
                onChange={handleChange}
            />
            <button onClick={onSearch}>Search</button>
        </div>
    )
}