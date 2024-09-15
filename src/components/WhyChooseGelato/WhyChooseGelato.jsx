import styles from './WhyChooseGelato.module.css'

export const WhyChooseGelato = () => {
  return <section className="px-6 sm:px-14 xl:px-40 pb-4 sm:pb-16">
    <h2 className="font-semibold text-3xl md:text-6xl text-center py-5 md:py-10 tracking-tight">Why choose Gelato</h2>
    <div className="md:pt-6 grid md:grid-cols-2 items-center">
      <div>
        <img src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/1000x0/" alt="" />
      </div>
      <div class={`${styles.points} md:pl-12`}>
          <h4>▻ World's largest print-on-demand network</h4>
          <p>140+ print partners in 32 countries. Gelato is a truly global service.</p>
          <h4>▻ Sell globally, produce locally</h4>
          <p>Your products are produced close to your customers, wherever they are.</p>
          <h4>▻ 100% free editing tools</h4>
          <p>Create your custom products using our suite of <a className="underline" href="#">free tools.</a></p>
          <h4>▻ 60+logistics partners</h4>
          <p>Our global network of logistics partners ensures your products are delivered fast.</p>
          <h4>▻ High-quality products</h4><p>We partner with the world's leading brands to ensure the best quality products.</p>
          <h4>▻ Endless creativity with Shutterstock Images</h4><p>Access millions of images and graphics to create unique products you can sell in your store.</p>
          <h4>▻ 1-click integration to the leading ecommerce platforms</h4><p>Connect your store to Gelato using <a className="underline" href="#" >our integrations</a> with <a className="underline" href="#">Shopify</a>, <a className="underline" href="/print-on-demand/etsy" >Etsy</a> and more.</p>
        </div>
    </div>
  </section>
} 