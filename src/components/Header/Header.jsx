import { Avatar } from "../../iconComponents/Avatar";
import { Cart } from "../../iconComponents/Cart";
import { CompanyIcon } from "../../iconComponents/CompanyIcon";
import { Globe } from "../../iconComponents/Globe";
import { Headset } from "../../iconComponents/Headset";
import { Button } from "../Button/Button";

export const Header = () => {
  return <header className="sticky top-0 z-1000 bg-white">
    <div className="">
    <div className="px-6 sm:px-14 xl:px-32 py-3 flex justify-between border-b border-themeGray/20">
      <div className="w-[130px] flex items-center">
        <CompanyIcon />
      </div>
      <div className="flex tracking-tighter">
        <div className="hidden lg:block rounded-3xl hover:bg-black/20">
          <Button text={'Contact us'} icon={<Headset />} />
        </div>
        <div className="hidden md:block rounded-3xl hover:bg-black/20">
          <Button text={'EN/INR'} icon={<Globe />} dropdown={true} />
        </div>
        <div className="hidden md:block rounded-3xl hover:bg-black/20">
          <Button text={'Cart'} icon={<Cart />} />
        </div>
        <div className="hidden lg:block rounded-3xl hover:bg-black/20">
          <Button text={'Sign in'} icon={<Avatar />} />
        </div>
        <div className="rounded-3xl text-white bg-black ml-2 hover:text-gray-400">
          <Button text={'Sign up for free'} />
        </div>
      </div>
    </div>
    <nav className="hidden xl:flex px-[110px] border-b border-themeGray/20 tracking-tighter">
      <div className="w-max hover:bg-black/5 py-2">
        <Button text={'Products'} dropdown={true} />
      </div>
      <div className="w-max hover:bg-black/5 py-2">
        <Button text={'Start selling'} dropdown={true} />
      </div><div className="w-max hover:bg-black/5 py-2">
        <Button text={'Tools and apps'} dropdown={true} />
      </div><div className="w-max hover:bg-black/5 py-2">
        <Button text={'Pricing'} dropdown={true} />
      </div><div className="w-max hover:bg-black/5 py-2">
        <Button text={'Resources'} dropdown={true} />
      </div><div className="w-max hover:bg-black/5 py-2">
        <Button text={'Pro sellers'} />
      </div><div className="w-max hover:bg-black/5 py-2">
        <Button text={'GelatoConnect'} dropdown={true} />
      </div>
    </nav>

    </div>
  </header>
};