import React from "react";
import { Button } from "../../generic/Button";
import { themeContext } from "../../../contexts/themeContext";

export const Header: React.FC = () => {
  // const [isOpened, setIsOpened] = useState(false);
  //   const dropdownElements: DropdownElement[] = [{ label: "Home" }, { label: "About" }, { label: "Contact" }];

  const { isDarkMode, setIsDarkMode } = React.useContext(themeContext);

  return (
    <header
      className='rounded-3xl bg-gradient-to-b from-blue-300 to-indigo-500 px-6 py-6 text-white sm:px-12 dark:from-blue-600 dark:to-indigo-900 '
      // onClick={() => setIsOpened(!isOpened)}
    >
      <div className='container mx-auto'>
        <div className='grid grid-cols-2'>
          <h1 className='text-2xl font-bold text-slate-800 dark:text-white'>My Website</h1>
          <div className='relative flex w-40 justify-self-end text-right'>
            <Button
              color={isDarkMode ? "light-gray" : "dark-gray"}
              onClick={() => {
                setIsDarkMode && setIsDarkMode(!isDarkMode);
              }}
              buttonText={isDarkMode ? "Light Mode" : "Dark Mode"}
            />
          </div>
        </div>
      </div>
      {/* {isOpened && ( */}
      <nav className='mt-4'>
        <ul className='grid grid-rows-3 justify-center'>
          <li className='w-80 text-center hover:bg-blue-500'>
            <a href='#' className='hover:underline'>
              Home
            </a>
          </li>
          <li className='w-80 text-center hover:bg-blue-500'>
            <a href='#' className='hover:underline'>
              About
            </a>
          </li>
          <li className='w-80 text-center hover:bg-blue-500'>
            <a href='#' className='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* )} */}
    </header>
  );
};
