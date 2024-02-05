import { useEffect, useRef } from "react";

interface DropdownElement {
  label: string;
  link?: string;
  onClick?: () => void;
}

interface DropdownProps {
  dropdownElements: DropdownElement[];
  showDropdown: boolean;
  setShowDropdown?: (showDropdown: boolean) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ dropdownElements, showDropdown, setShowDropdown }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // A useEffect for handling the click outside of the dropdown
  // TODO: Make this actually work
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && setShowDropdown) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderedDropdownElements = dropdownElements.map((element, index) => {
    return (
      <a
        key={index}
        href={element.link}
        onClick={element.onClick}
        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
        role='menuitem'
      >
        {element.label}
      </a>
    );
  });

  return (
    showDropdown && (
      <div
        ref={dropdownRef}
        className='origin-top-right left-1 absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
      >
        <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
          {renderedDropdownElements}
        </div>
      </div>
    )
  );
};
