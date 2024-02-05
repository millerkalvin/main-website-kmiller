import { DownArrow, RightArrow } from "./IconList";

interface IconProps {
  icon: string;
}
// TODO: Make customizable by size and color
export const Icon: React.FC<IconProps> = ({ icon }) => {
  let iconComponent;

  switch (icon) {
    case "rightArrow":
      iconComponent = RightArrow;
      break;
    case "downArrow":
      iconComponent = DownArrow;
      break;
    default:
      iconComponent = null;
      break;
  }

  return <>{iconComponent}</>;
};
