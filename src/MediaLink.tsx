import React from "react";

interface MediaLinkProps {
  href: string;
  imageSrc: string;
  altText: string;
}

const MediaLink: React.FC<MediaLinkProps> = ({ href, imageSrc, altText }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={styles.link}>
      <img src={imageSrc} alt={altText} style={styles.image} />
    </a>
  );
};

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    margin: "10px",
  },
  image: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
};

export default MediaLink;
