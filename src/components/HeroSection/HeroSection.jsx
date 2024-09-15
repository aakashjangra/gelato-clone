import { Button } from "../Button/Button"

export const HeroSection = () => {
  return <div className="flex flex-col-reverse md:grid md:grid-cols-2 px-6 sm:px-14 xl:px-32 py-4 md:py-0 items-center bg-lightPink md:bg-white">
    <div className="md:pr-10">
      <h1 className="text-3xl md:text-6xl my-6 sm:my-8 font-medium md:font-semibold tracking-tighter leading-tight">Print on demand for your ecommerce business</h1>
        <h2 className="font-medium md:font-semibold pb-3 text-2xl">Sign up for free and only pay for what you sell</h2>
      <p className="tracking-tight">Turn your passion into profit with the world's largest <span className="underline">print on demand</span> network.</p>
      {/* buttons */}
      <div className="flex py-8 gap-4">
        <div className="rounded-3xl text-white bg-black md:ml-2 hover:text-gray-400">
          <Button text={'Get started for free'} />
        </div>
        <div className="rounded-3xl border border-black/30 hover:bg-black/20">
          <Button text={'See our products'} />
        </div>
        </div>
    </div>
    <div>
      <img className="md:hidden sm:h-64" src="hero-small.png" alt="" />
      <img className="hidden md:inline-block h-100 w-100" src="hero.png" alt="" />
    </div>
  </div>
}