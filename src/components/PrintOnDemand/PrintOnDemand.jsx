import { Button } from "../Button/Button"

export const PrintOnDemand = () => {
  return <section className="px-6 sm:px-14 xl:px-32 md:py-10 flex flex-col-reverse md:grid grid-cols-2 items-center bg-lightPink">
    
    <div className="pr-14">
      <h2 className="font-medium text-lg">For print on demand sellers</h2>
      <h3 className="py-3 font-medium md:font-semibold text-4xl md:text-6xl tracking-tighter leading-tight">Accelerate business growth with innovative design tools and apps</h3>
      <p className="my-4 font-medium text-2xl">See how our cutting-edge solutions can help you reach new customers and maximize your profits.</p>
      <div className="bg-black text-white w-max rounded-2xl hover:text-gray-300 my-6">
        <Button text={'Get started'} />
      </div>
    </div>
    <div>
      <img src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/" alt="" />
    </div>
  </section>
} 