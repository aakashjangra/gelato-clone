import { Dropdown } from "../../iconComponents/Dropdown";

export const Button = ({icon = null, text, dropdown=false}) => {
  return <button className="flex py-2 px-4 lg:px-5 gap-2">
    {
      icon && (<span className="h-6 w-6">{icon}</span>)
    }
    <span className="text-xs sm:text-sm font-semibold">{text}</span>
    {
      dropdown && (<span className="w-5"><Dropdown /></span>)
    }
    </button>;
};