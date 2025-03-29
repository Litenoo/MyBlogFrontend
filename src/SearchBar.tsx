import React from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  query: string;
  loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, query, loading }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value); // Pass the updated query to the parent
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for posts..."
        className="search-bar"
      />
      {loading && <span className="loading-indicator">...</span>}
    </div>
  );
};

export default SearchBar;
