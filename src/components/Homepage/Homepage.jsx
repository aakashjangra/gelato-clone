import { Headset } from "../../iconComponents/Headset"
import { Footer } from "../Footer/Footer"
import { Button } from "../Header/Button/Button"
import { Header } from "../Header/Header"
import { HeroSection } from "../HeroSection/HeroSection"
import { Ribbon } from "../Ribbon/Ribbon"

export const Homepage = () => {
  return (
    <>
    {/* fixed contact us bottom on homepage */}
      <div className="fixed bottom-10 right-10 bg-themeGray text-white rounded-3xl hover:text-gray-400">
        <Button text={'Contact Us'} icon={<Headset color="invert"/>} />
      </div>
      <Ribbon />
      <Header />
      <HeroSection />
      <section className="px-32 py-8 bg-lightPink font-semibold flex justify-evenly gap-24">
        <div className="flex flex-col items-center">
          <span  className="text-3xl">90%</span>
          <span className="text-2xl font-medium text-center">
          of all orders are produced locally
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl">90%</span>
          <span className="text-2xl font-medium text-center">
          of orders arrive within 5 days of ordering
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl">140+</span>
          <span className="text-2xl font-medium text-center">
          print providers across 32 countries
          </span>
        </div>
      </section>

      <Footer />
    </>
  )
}