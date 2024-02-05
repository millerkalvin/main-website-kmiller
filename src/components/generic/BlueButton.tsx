interface BlueButtonProps {
  onClick: () => void;
  buttonText: string;
  icon?: React.ReactNode;
}

export const BlueButton: React.FC<BlueButtonProps> = ({ onClick, buttonText, icon }) => {
  return (
    <>
      <button
        type='button'
        className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-500 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        onClick={onClick}
      >
        {buttonText}
        {icon}
      </button>
    </>
  );
};
