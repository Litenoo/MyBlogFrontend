import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Article from "./Article";
import MainPage from "./MainPage";

// Example post data (replace with your real data or API)
const posts = {
  1: {
    title: "First Post",
    content: "This is the content of the first post.",
    date: "2025-05-28",
  },
  2: {
    title: "Second Post",
    content: "This is the content of the second post.",
    date: "2025-06-01",
  },
};

function Post() {
  const { id } = useParams<{ id: string }>();
  const post = id && posts.hasOwnProperty(id) ? posts[id as unknown as keyof typeof posts] : undefined;
  if (!post) return <div>404 Post not found</div>;
  return <Article title={post.title} content={post.content} date={post.date} />;
}

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/"  element={<MainPage imageSrc="profilePicture.png" altText="profilePicture" />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  </Router>
);

export default App;