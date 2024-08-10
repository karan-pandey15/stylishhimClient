import Head from 'next/head';
import Carousel from "./components/carousel/page";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import ThirdBanner from "./components/banner3/page";
import SecondBanner from "./components/banner2/page";
import FourthBanner from "./components/banner4/page";
import FifthBanner from "./components/banner5/page";
import SixthBanner from "./components/banner6/page";
import SeventhBanner from "./components/banner7/page";
import EightBanner from "./components/banner8/page";
import Testimonial from "./components/banner9/page";
import NewsBlogpage from "./components/banner10/page";
import './styles/globals.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>StylishHim | Men's and Women's Beauty Products</title>
        <meta name="description" content="Discover the ultimate destination for men's & women's grooming and skincare products at StylishHim. Find creams, moisturizers, face washes, shampoos, and more." />
        <meta name="keywords" content="StylishHim, beauty products, skincare, grooming, men's products, women's products, creams, moisturizers, face washes, shampoos" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.stylishhim.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.stylishhim.com/" />
        <meta property="og:title" content="StylishHim | Men's and Women's Beauty Products" />
        <meta property="og:description" content="Shop the best grooming and skincare products at StylishHim." />
        <meta property="og:image" content="https://www.stylishhim.com/images/og-image.jpg" /> {/* Replace with an actual image URL */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.stylishhim.com/" />
        <meta property="twitter:title" content="StylishHim | Men's and Women's Beauty Products" />
        <meta property="twitter:description" content="Shop the best grooming and skincare products at StylishHim." />
        <meta property="twitter:image" content="https://www.stylishhim.com/images/twitter-image.jpg" /> {/* Replace with an actual image URL */}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
      </Head>
      <main>
        <div>
          <Navbar />
        </div>
        <div>
          <Carousel />
        </div>
        <SecondBanner />
        <div>
          <ThirdBanner />
        </div>
        <FourthBanner />
        <FifthBanner />
        <SixthBanner />
        <SeventhBanner />
        <EightBanner />
        <Testimonial />
        <NewsBlogpage />
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
}
