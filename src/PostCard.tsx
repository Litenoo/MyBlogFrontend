import React from "react";
import "./PostCard.css";

interface Tag {
  tag: string;
}

interface PostCardProps {
  title: string;
  updateDate: string;
  tags: Tag[];
}

const PostCard: React.FC<PostCardProps> = ({ title, updateDate, tags }) => {
  return (
    <div className="post-card">
      <p className="update-date"> {updateDate}</p>
      <h3>{title}</h3>
      <div className="tags">
        {tags.map((t, idx) => (
          <span key={idx} className="tag">
            {t.tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostCard;