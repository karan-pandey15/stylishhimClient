"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../../../public/Slider-01.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Head from "next/head";

const options = [
  "Creams",
  "Moisturizers",
  "Face Washes",
  "Shampoos",
  "Conditioners",
  "Scrubs",
];

export default function Carousel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionClick = (option) => {
    console.log("Navigating to", option);
    // Use Next.js routing instead of window.location.href for better SEO
    switch (option) {
      case "Creams":
        window.location.href = "/creamsdisplay";
        break;
      case "Moisturizers":
        window.location.href = "/moisturizersdisplay";
        break;
      case "Face Washes":
        window.location.href = "/facewashesdisplay";
        break;
      case "Shampoos":
        window.location.href = "/shampoosdisplay";
        break;
      case "Conditioners":
        window.location.href = "/conditionersdisplay";
        break;
      case "Scrubs":
        window.location.href = "/scrubdisplay";
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>StylishHim | Premium Beauty and Grooming Products for Men</title>
        <meta
          name="description"
          content="Discover the ultimate destination for men's grooming and skincare products at StylishHim. Shop our curated selection of creams, moisturizers, face washes, shampoos, conditioners, and scrubs."
        />
        <meta
          name="keywords"
          content="StylishHim, men's beauty products, grooming, skincare, creams, moisturizers, face washes, shampoos, conditioners, scrubs"
        />
        <meta name="author" content="StylishHim" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.stylishhim.com/" />
        <meta
          property="og:title"
          content="StylishHim | Premium Beauty and Grooming Products for Men"
        />
        <meta
          property="og:description"
          content="Discover the ultimate destination for men's grooming and skincare products at StylishHim."
        />
        <meta property="og:image" content="https://www.stylishhim.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.stylishhim.com/" />
        <meta
          property="twitter:title"
          content="StylishHim | Premium Beauty and Grooming Products for Men"
        />
        <meta
          property="twitter:description"
          content="Discover the ultimate destination for men's grooming and skincare products at StylishHim."
        />
        <meta
          property="twitter:image"
          content="https://www.stylishhim.com/twitter-image.jpg"
        />

        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "StylishHim",
              "url": "https://www.stylishhim.com",
              "logo": "https://www.stylishhim.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/stylishhim",
                "https://www.instagram.com/stylishhim",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-5555",
                "contactType": "Customer service",
              },
            }),
          }}
        />
      </Head>

      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src={Slider1}
              className="w-full h-screen object-cover object-center"
              alt="sliderone"
            />

            <div className="absolute top-40 text-start md:right-20 w-full md:w-[40%] px-4 md:px-0">
              <span className="tracking-[.20em]">PARABEN-FREE</span>
              <h2 className="text-3xl font-bold py-3">
                Welcome to StylishHim!
              </h2>
              <p>
                Discover the ultimate destination for men's grooming and
                skincare products at StylishHim. We believe that every man
                deserves to look and feel his best, which is why we offer a
                curated selection of premium beauty, skincare, and hair care
                products tailored specifically.
              </p>

              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none mt-5"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                {searchTerm && (
                  <ul>
                    {filteredOptions.map((option) => (
                      <li
                        key={option}
                        style={{ backgroundColor: "#fff" }}
                        className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
