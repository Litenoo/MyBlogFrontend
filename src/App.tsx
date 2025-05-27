import React from "react";
import MainPage from "./MainPage"; // Adjust the import path if necessary

const App: React.FC = () => {
  return (
    <div>
      <MainPage
        imageSrc={`/profilePicture.png`} // Correct way to access images in public folder
        altText="Your Name"
      />
    </div>
  );
};

export default App;