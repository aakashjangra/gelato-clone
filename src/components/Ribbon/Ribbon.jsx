import { Info } from "../../iconComponents/Info"

export const Ribbon = () => {

  return <div className="flex justify-center items-center gap-3 bg-black text-white py-2 tracking-tighter">
    <span className="text-md underline">
    FREE SHIPPING for orders over $300. Order today
    </span>
    <span className="w-[18px]">
      <Info />
    </span>
  </div>
 }