import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PostCard from "./PostCard";

const Browser: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Example handler (does not fetch data, just sets query)
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    console.log("Search query updated:", newQuery);
    // You can set loading and fetch data here if needed
  };

  // Example post data
  const examplePost = {
    title: "How to Use React Hooks with TypeScript and some other long title that might not fit in the card",
    updateDate: "2025-05-28",
    tags: [{ tag: "react" }, { tag: "hooks" }, { tag: "typescript" }],
  };

  return (
    <div>
      <SearchBar
        onSearch={handleSearch}
        query={query}
        loading={loading}
      />
      {/* Example PostCard */}
      <PostCard
        title={examplePost.title}
        updateDate={examplePost.updateDate}
        tags={examplePost.tags}
      />
    </div>
  );
};

export default Browser;