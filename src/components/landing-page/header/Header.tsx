import React, { useState } from "react";
import { Button } from "../../generic/Button";

interface HeaderProps {
  isDarkMode?: boolean;
  setIsDarkMode?: (isDarkMode: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpened, setIsOpened] = useState(false);
  //   const dropdownElements: DropdownElement[] = [{ label: "Home" }, { label: "About" }, { label: "Contact" }];

  return (
    <header className='bg-blue-800 py-6 text-white ' onClick={() => setIsOpened(!isOpened)}>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2'>
          <h1 className='text-2xl font-bold'>My Website</h1>
          <div className='relative flex w-40 justify-self-end text-right'>
            <Button
              color='dark-gray'
              onClick={() => {
                setIsDarkMode && setIsDarkMode(!isDarkMode);
              }}
              buttonText='Dark Mode'
            />
          </div>
        </div>
      </div>
      {isOpened && (
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
      )}
    </header>
  );
};
