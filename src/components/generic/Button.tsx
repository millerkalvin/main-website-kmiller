interface ButtonProps {
  onClick: () => void;
  buttonText: string;
  color?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, color = "blue", buttonText, icon }) => {
  let colorClass;

  switch (color) {
    case "blue":
      colorClass = "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500";
      break;
    case "green":
      colorClass = "bg-green-500 hover:bg-green-600 focus:ring-green-500";
      break;
    case "red":
      colorClass = "bg-red-500 hover:bg-red-600 focus:ring-red-500";
      break;
    default:
      colorClass = "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500";
      break;
    case "dark-gray":
      colorClass = "bg-gray-600 hover:bg-gray-700 focus:ring-gray-600";
      break;
  }

  return (
    <>
      <button
        type='button'
        className={
          "bg-gray inline-flex w-full justify-center rounded-md border px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 " +
          colorClass
        }
        onClick={onClick}
      >
        {buttonText}
        {icon}
      </button>
    </>
  );
};
