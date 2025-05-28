import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import remarkGfm from "remark-gfm";
import rehpeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import "./Article.css";

interface ArticleProps {
  title: string;
  content: string;
  date?: string; // Add this line
  children?: React.ReactNode;
}

// Custom CodeBlock component for code blocks
const CodeBlock: React.FC<{
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}> = ({ children, className, ...rest }) => {
  const match = /language-(\w+)/.exec(className || "");
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(String(children));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return match ? (
    <div style={{ position: "relative" }}>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 2,
          padding: "8px 16px",
          fontSize: "0.9em",
          borderRadius: "4px",
          border: "none",
          background: "#21242b",
          color: "#aaa",
          cursor: "pointer",
        }}
        aria-label="Copy code"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        language={match[1]}
        style={style}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};

const Article: React.FC<ArticleProps> = ({ title, content, date, children }) => (
  <div className="template-container">
    {date && (
      <div className="template-date" style={{ marginBottom: "8px", color: "#888", fontSize: "0.95em" }}>
        <div className="date">{date}</div>
      </div>
    )}
    <h1 className="template-title">{title}</h1>
    <div className="template-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, rehpeSlug]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code: CodeBlock,
        }}
      >
        {content}
      </ReactMarkdown>
      {children}
    </div>
  </div>
);
export default Article;