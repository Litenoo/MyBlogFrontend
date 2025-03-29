import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MediaLink from "./MediaLink";
import "./MainPage.css"; // Your styles

interface MainPageProps {
    imageSrc: string;
    altText: string;
}

interface SearchResult {
    id: string;
    title: string;
    description: string;
}

const MainPage: React.FC<MainPageProps> = ({ imageSrc, altText }) => {
    const [results, setResults] = useState<SearchResult[]>([]);
    const [query, setQuery] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    // Debounce delay (in ms)
    const debounceDelay = 500;

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (query) {
                handleSearch(query);
            } else {
                setResults([]);
            }
        }, debounceDelay);

        return () => {
            clearTimeout(debounceTimer); // Cleanup timeout on query change
        };
    }, [query]);

    const handleSearch = async (query: string) => {
        setLoading(true);
        try {
            const response = await fetch(`http://backend:3000/search?q=${query}`);
            if (response.ok) {
                const data = await response.json();
                setResults(data.results); // Assuming the backend returns the results in `data.results`
            } else {
                console.error("Error fetching search results");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main-page">
            <div className="profile-image">
                <img src={imageSrc} alt={altText} />
            </div>
            <h2>{altText}</h2>

            <desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum nisi metus. Nunc eu enim sagittis, commodo quam eu, commodo metus. Phasellus eu nulla mollis, posuere magna id, finibus purus. Nunc vitae dignissim ligula. Phasellus sed elementum mi, eget tempor ex. Nulla vitae sapien pulvinar, pharetra sem sed, aliquet urna. Vestibulum pellentesque urna justo, sit amet viverra lorem imperdiet a.
            </desc>

            <div className="underline"></div>

            <MediaLink href="https://discord.com" imageSrc="/discord.png" altText="Discord"/>

            {/* Search Bar */}
            <SearchBar
                onSearch={setQuery} // Update query state when user types
                query={query} // Controlled input
                loading={loading} // Display loading state
            />

            {/* Display Search Results */}
            <div className="search-results">
                {loading && <p>Loading...</p>}
                {results.length > 0 ? (
                    results.map((result) => (
                        <div key={result.id} className="search-result">
                            <h3>{result.title}</h3>
                            <p>{result.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default MainPage;
