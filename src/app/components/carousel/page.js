"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../../../public/Slider-01.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

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
    // Here, you can navigate to the respective page using Next.js routing
    switch (option) {
      case "Creams":
        window.location.href = "/pages/creamsdisplay";
        break;

      case "Moisturizers":
        window.location.href = "/pages/moisturizersdisplay";
        break;
      case "Face Washes":
        window.location.href = "/pages/facewashesdisplay";
        break;

      case "Shampoos":
        window.location.href = "/pages/shampoosdisplay";
        break;
      case "Conditioners":
        window.location.href = "/pages/conditionersdisplay";
        break;
      case "Scrubs":
        window.location.href = "/pages/scrubdisplay";
        break;

      default:
        break;
    }
  };
  return (
    <>
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
              <h2 className="text-3xl font-bold py-3">Welcome to StylishHim!</h2>
              <p>
                Discover the ultimate destination for mens & womens grooming and
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
