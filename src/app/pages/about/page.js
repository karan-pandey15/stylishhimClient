import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/navbar/page";
import "./Aboutpagestyle.css";
import firstImg from "../../../../public/about-1.jpg";
import secondImg from "../../../../public/about-2.jpg";
import thirdImg from "../../../../public/about-3.jpg";
import fourthImg from "../../../../public/about-7.jpg";
import Footer from "@/app/components/footer/page";
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>About Us | StylishHim - Premium Beauty Products</title>
                <meta
                    name="description"
                    content="Learn more about StylishHim, your ultimate destination for men's grooming and skincare products. Our expert team ensures quality and satisfaction with every product."
                />
                <meta
                    name="keywords"
                    content="StylishHim, men's beauty products, grooming, skincare, creams, moisturizers, face washes, shampoos, conditioners, scrubs, about us"
                />
                <meta name="author" content="StylishHim" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.stylishhim.com/about" />
                <meta
                    property="og:title"
                    content="About Us | StylishHim - Premium Beauty Products"
                />
                <meta
                    property="og:description"
                    content="Learn more about StylishHim, your ultimate destination for men's grooming and skincare products. Our expert team ensures quality and satisfaction with every product."
                />
                <meta
                    property="og:image"
                    content="https://www.stylishhim.com/images/about-page-banner.jpg"
                />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.stylishhim.com/about" />
                <meta
                    property="twitter:title"
                    content="About Us | StylishHim - Premium Beauty Products"
                />
                <meta
                    property="twitter:description"
                    content="Learn more about StylishHim, your ultimate destination for men's grooming and skincare products. Our expert team ensures quality and satisfaction with every product."
                />
                <meta
                    property="twitter:image"
                    content="https://www.stylishhim.com/images/about-page-banner.jpg"
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
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+1-800-555-5555",
                                "contactType": "Customer service",
                            },
                            "sameAs": [
                                "https://www.facebook.com/stylishhim",
                                "https://www.instagram.com/stylishhim",
                            ],
                        }),
                    }}
                />
            </Head>

            <div style={{ backgroundColor: '#FCF7EE' }}>
                <Navbar />
                <div className="aboutmain_container">
                    <div className="aboutcontent_container">
                        <p className="acoutcontent_paraone">EFFECTIVE FOR SKIN</p>
                        <h1>Guaranteed Result In 2 Weeks</h1>
                        <p className="acoutcontent_paratwo">
                            Quickly pursue granular synergy after just-in-time niche markets.
                            Phosfluorescently syndicate sticky content whereas robust resources.
                            Uniquely target integrated meta-services and inexpensive process
                            improvements. Distinctively matrix robust ideas through customer-directed
                            leadership skills. Efficiently evolve.
                        </p>
                        <p className="paraborder"></p>
                        <div className="three_content_container">
                            <div className="paracontent_one">
                                <span>72 St. Merch Street, <br /> <span>LA,California.</span>  </span>
                            </div>
                            <span className="paracontent_two">  +00 123 456789 </span>
                            <span className="paracontent_three">info@example.com  </span>
                        </div>
                    </div>
                    <div className="aboutimage_container">
                        <Image className="about_pageimage" src={firstImg} alt="img" />
                    </div>
                </div>

                <div className="aboutmain_container">
                    <div className="second_aboutimage_container">
                        <Image className="about_page_secimage" src={secondImg} alt="img" />
                        <Image className="about_page_secimage" src={thirdImg} alt="img" />
                    </div>
                    <div className="aboutcontent_container">
                        <p className="acoutcontent_paraone">INTENSE HYDRATION</p>
                        <h1>Restore Skin Moisture</h1>
                        <p className="acoutcontent_paratwo">
                            Tulla at volutpat diam ut venenatis tellus in. Tellus
                            molestie nunc non blandit massa enim nec dui nunc. Elementum eu facilisis
                            sed odio morbi quis commodo odio aenean. Ultrices mi tempus imperdiet nulla malesuada.
                        </p>

                        <div className="secondpara_heading">
                            <div className="childsecond_container">
                                <h2 className="secondheading">Opening Hours</h2>
                                <p>Mon - Fri : 08:30 - 20:00</p>
                                <p>Sat & Sun : 09:30 - 21:30</p>
                            </div>

                            <div className="childsecond_container">
                                <h2 className="secondheading">Reach Us</h2>
                                <p>info@example.com</p>
                                <p>+000 123 456789</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <p style={{ textAlign: 'center', marginTop: 50, marginBottom: 10 }}>OUR TEAM</p>
            <h1 style={{ textAlign: 'center', fontSize: 36, fontWeight: 'bold' }}>Cosmetic Experts</h1>

            <div className="our_team_container">
                <div className="our_team_content_container">
                    <Image className="our_teamcontainner_img" src={fourthImg} alt="img" />
                    <h2 className="our_teamheading">Nicloas</h2>
                    <p style={{ marginBottom: 20 }}>Product Manager</p>
                </div>

                <div className="our_team_content_container">
                    <Image className="our_teamcontainner_img" src={firstImg} alt="img" />
                    <h2 className="our_teamheading">Niyama</h2>
                    <p style={{ marginBottom: 20 }}>CEO</p>
                </div>

                <div className="our_team_content_container">
                    <Image className="our_teamcontainner_img" src={thirdImg} alt="img" />
                    <h2 className="our_teamheading">Mark</h2>
                    <p style={{ marginBottom: 20 }}>Founder</p>
                </div>

                <div className="our_team_content_container">
                    <Image className="our_teamcontainner_img" src={fourthImg} alt="img" />
                    <h2 className="our_teamheading">Bernita</h2>
                    <p style={{ marginBottom: 20 }}>Co-founder</p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;
