import React, { useState } from "react";
import { Header } from "./header/Header";

const LandingPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // About
  // Projects - with links to other pages that host the projects
  // Contact

  // Footer - with links to social media and email
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <div className='text text-end text-8xl text-emerald-600'>Hello World</div>
    </div>
  );
};

export default LandingPage;
