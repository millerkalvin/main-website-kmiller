import React, { useContext, useState } from "react";
import { Header } from "./header/Header";
import { themeContext } from "../../contexts/themeContext";

const LandingPage: React.FC = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // About
  // Projects - with links to other pages that host the projects
  // Contact

  // Footer - with links to social media and email
  const { isDarkMode } = useContext(themeContext);
  return (
    <div className='flex justify-center'>
      <div className={`container ${isDarkMode ? "dark" : ""}`}>
        <Header />
        <div className='text text-end text-8xl text-emerald-600'>Hello World</div>
      </div>
    </div>
  );
};

export default LandingPage;
