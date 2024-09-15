import { Button } from "../Button/Button"

export const GelatoConnect = () => {
  return <section className="px-6 sm:px-20 lg:px-14 xl:px-32 pt-12 flex flex-col md:grid grid-cols-2 items-center">
    <div className="">
      <img className="" src="https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/" alt="" />
    </div>
    <div className="pl-4 lg:pl-12">
      <h2 className="font-medium text-lg">For print producers</h2>
      <h3 className="pt-2 md:pt-0 mb-2 font-medium md:font-semibold text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-tight">GelatoConnect</h3>
      <p className="my-4 font-medium text-2xl">Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</p>
      <div className="bg-black text-white w-max rounded-2xl hover:text-gray-300 my-6">
        <Button text={'Learn more'} />
      </div>
    </div>
    
  </section>
} 