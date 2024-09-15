import { Headset } from "../../../iconComponents/Headset";
import { Button } from "../Button";

export const ContactUs = () => {
  {/* fixed contact us bottom on homepage */ }
  return <div className="tracking-tighter fixed bottom-4 right-8 bg-themeGray text-white rounded-3xl hover:text-gray-400">
    <Button text={'Contact Us'} icon={<Headset color="invert" />} />
  </div>
};