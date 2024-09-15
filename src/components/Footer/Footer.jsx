import { CompanyIcon } from "../../iconComponents/CompanyIcon"
import { CompanyIconWhite } from "../../iconComponents/CompanyIconWhite"
import { Facebook } from "../../iconComponents/Facebook"
import { Instagram } from "../../iconComponents/Instagram"
import { LinkedIn } from "../../iconComponents/LinkedIn"
import { Tiktok } from "../../iconComponents/Tiktok"
import { Youtube } from "../../iconComponents/Youtube"
import { Button } from "../Header/Button/Button"

export const Footer = () => {
  return <footer className="bg-black text-white px-32 py-10">
    <div className="flex justify-between pb-8">
      <div>
        <CompanyIconWhite />
      </div>
      <div className="flex items-center gap-10">
        <p>Find Gelato on:</p>
        <div className="h-6 w-6">
          <Instagram />
        </div>
        <div className="h-6 w-6">
          <Facebook />
        </div>
        <div className="h-6 w-6">
          <Tiktok />
        </div>
        <div className="h-6 w-6">
          <LinkedIn />
        </div>
        <div className="h-6 w-6">
          <Youtube />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <p className="text-xs tracking-tight">Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.</p>
        <div className="bg-white text-black w-max rounded-2xl hover:bg-gray-300 my-4">
          <Button text={'Get started'} />
        </div>

        <div className="my-12">
          <p className="pb-1">Get the app</p>
          <div className="flex gap-2">
            <button>
              <img src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg" alt="" />
            </button>
            <button>
              <img src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg" alt="" />
            </button>
          </div>

        </div>
      </div>

      <div className="flex col-span-2 gap-12">
        <div>
          <h3 className="pb-4 tracking-tight">Print on demand</h3>
          <ul className="text-xs tracking-tight flex flex-col gap-1">
            <li>
              <a href="#">What is print on demand?</a>
            </li>
            <li>
              <a href="#">Product catalog</a>
            </li>
            <li>
              <a href="#">Shipping and delivery</a>
            </li>
            <li>
              <a href="#">Dropshipping products</a>
            </li>
            <li>
              <a href="#">Pro sellers</a>
            </li>
            <li><a href="#">White label products</a></li>
            <li>
              <a href="#">Returns policy</a>
            </li>
            <li>
              <a href="#">Global, yet local</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="pb-4 tracking-tight">Integrations</h3>
          <ul className="text-xs tracking-tight flex flex-col gap-1">
            <li>
              <a href="#">Shopify</a>
            </li>
            <li>
              <a href="#">Etsy</a>
            </li>
            <li>
              <a href="#">WooCommerce</a>
            </li>
            <li>
              <a href="#">Wix</a>
            </li>
            <li>
              <a href="#">Squarespace</a>
            </li>
            <li>
              <a href="#">BigCommerce</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="pb-4 tracking-tight">Start selling</h3>
          <ul className="text-xs tracking-tight flex flex-col gap-1">
            <li>
              <a href="#">Embroidery</a>
            </li>
            <li>
              <a href="#">Print on demand t-shirts</a>
            </li>
            <li>
              <a href="#">Print on demand hoodies</a>
            </li>
            <li>
              <a href="#">Print on demand posters</a>
            </li>
            <li>
              <a href="#">Print on demand canvas</a>
            </li>
            <li>
              <a href="#">Print on demand calendars</a>
            </li>
            <li>
              <a href="#">Print on demand mugs</a>
            </li>
            <li>
              <a href="#">Custom products</a>
            </li>
            <li>
              <a href="#">Custom clothing</a>
            </li>
            <li>
              <a href="#">Custom merchandise</a>
            </li>
            <li>
              <a href="#">Custom phone cases</a>
            </li><li>
              <a href="#">Print on demand Europe</a>
            </li><li>
              <a href="#">Print on demand France</a>
            </li><li>
              <a href="#">Print on demand Canada</a>
            </li><li>
              <a href="#">Merch Maker</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="pb-4 tracking-tight">Company</h3>
          <ul className="text-xs tracking-tight flex flex-col gap-1">
            <li>
              <a href="#">GelatoConnect</a>
            </li>
            <li>
              <a href="#">About Gelato</a>
            </li>
            <li>
              <a href="#">Leadership team</a>
            </li>
            <li>
              <a href="#">Board & Investors</a>
            </li>
            <li>
              <a href="#">Newsroom</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Customer Stories</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Affiliates program</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <div className="flex justify-between mt-16">
      <div className="flex gap-2 text-xs tracking-tight">
        <span>Contact us</span>
        <span>|</span>
        <span>Legal</span>
        <span>|</span>
        <span>Privacy policy</span>
        <span>|</span>
        <span>Cookie policy</span>
        <span>|</span>
        <span>API terms</span>
        <span>|</span>
        <span>Sitemap</span>
      </div>
      <div className="border-2 border-white text-left tracking-tight cursor-default">
        <select className="text-white w-52 px-1 py-2 bg-black overflow-hidden" name="lang" id="lang">
          <option value="en-US">English</option>
          <option value="ca">English (Canada)</option>
          <option value="uk">English (United Kingdom)</option>
          <option value="au">English (Australia)</option>
          <option value="in">English (India)</option>
          <option value="ja">日本語</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="it">Italiano</option>
          <option value="de">Deutsch</option>
          <option value="no">Norsk</option>
          <option value="se">Svenska</option>
          <option value="vi">Tiếng Việt</option>
          <option value="nl">Nederlands</option>
          <option value="da">Dansk</option>
        </select>

      </div>
    </div>
  </footer>
}