import React, { useState } from "react";
import { BlueButton } from "../../generic/BlueButton";
import { Icon } from "../../generic/Icon";
import { Dropdown } from "../../generic/Dropdown";

export const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownElements = [{ label: "Home" }, { label: "About" }, { label: "Contact" }];

  return (
    <header className='bg-blue-800 text-white py-6'>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold'>My Website</h1>
        <nav className='mt-4'>
          <div className='relative inline-block text-left'>
            <BlueButton
              onClick={() => setShowDropdown(!showDropdown)}
              buttonText='Menu'
              icon={showDropdown ? <Icon icon='downArrow' /> : <Icon icon='rightArrow' />}
            />
            <Dropdown
              dropdownElements={dropdownElements}
              showDropdown={showDropdown}
              //   setShowDropdown={setShowDropdown}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};
