import React, { useContext } from "react";
import { Header } from "./header/Header";
import { themeContext } from "../../contexts/themeContext";
import { AboutMe } from "./about-me/AboutMe";

const LandingPage: React.FC = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // About
  // Projects - with links to other pages that host the projects
  // Contact

  // Footer - with links to social media and email
  const { isDarkMode } = useContext(themeContext);
  return (
    <div className={` ${isDarkMode ? "dark" : ""}`}>
      <div className='flex h-screen justify-center bg-gradient-to-b from-fuchsia-300 to-indigo-500 dark:from-fuchsia-700 dark:to-indigo-900'>
        <div className='container'>
          <div className=' my-8'>
            <Header />
          </div>
          <div className=' my-8'>
            <AboutMe />
          </div>
          <div className='text text-end text-8xl text-emerald-600'>Hello World</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
