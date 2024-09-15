import { Info } from "../../iconComponents/Info"

export const Ribbon = () => {

  return <div className="flex justify-center items-center gap-3 bg-black text-white py-2 px-6 tracking-tight">
    <span className="text-md underline">
    FREE SHIPPING for orders over $300. Order today
    </span>
    <span className="hidden md:inline w-[18px]">
      <Info />
    </span>
  </div>
 }