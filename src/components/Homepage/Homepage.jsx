import { Headset } from "../../iconComponents/Headset"
import { Footer } from "../Footer/Footer"
import { GelatoConnect } from "../GelatoConnect/GelatoConnect"
import { Button } from "../Button/Button"
import { Header } from "../Header/Header"
import { HeroSection } from "../HeroSection/HeroSection"
import { PrintOnDemand } from "../PrintOnDemand/PrintOnDemand"
import { Ribbon } from "../Ribbon/Ribbon"
import { Stats } from "../Stats/Stats"
import { WhyChooseGelato } from "../WhyChooseGelato/WhyChooseGelato"
import { ContactUs } from "../Button/ContactUs/ContactUs"

export const Homepage = () => {
  return (
    <>
      <ContactUs />
      <Ribbon />
      <Header />
      <HeroSection />
      <Stats />
      <WhyChooseGelato />
      <PrintOnDemand />
      <GelatoConnect />
      <Footer />
    </>
  )
}