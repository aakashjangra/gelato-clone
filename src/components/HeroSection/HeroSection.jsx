import { Button } from "../Header/Button/Button"

export const HeroSection = () => {
  return <div className="grid grid-cols-2 px-32 items-center">
    <div className="pr-10">
      <h1 className="text-6xl my-8 font-semibold tracking-tighter leading-tight">Print on demand for your ecommerce business</h1>
        <h2 className="font-semibold pb-3 text-2xl">Sign up for free and only pay for what you sell</h2>
      <p className="tracking-tight">Turn your passion into profit with the world's largest <span className="underline">print on demand</span> network.</p>
      {/* buttons */}
      <div className="flex py-8 gap-4">
        <div className="rounded-3xl text-white bg-black ml-2 hover:text-gray-400">
          <Button text={'Get started for free'} />
        </div>
        <div className="rounded-3xl border border-black/30 hover:bg-black/20">
          <Button text={'See our products'} />
        </div>
        </div>
    </div>
    <div>
      <img className="h-100 w-100" src="hero.png" alt="" />
    </div>
  </div>
}