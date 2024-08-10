import { Inter } from 'next/font/google';
import Prvider from '@/Redux/Prvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'StylishHim | Premium Beauty and Grooming Products for Men',
  description: 'Discover the ultimate destination for men\'s grooming and skincare products at StylishHim. Shop our curated selection of creams, moisturizers, face washes, shampoos, conditioners, and scrubs.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="StylishHim, men's beauty products, grooming, skincare, creams, moisturizers, face washes, shampoos, conditioners, scrubs" />
        <meta name="author" content="StylishHim" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.stylishhim.com/" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://www.stylishhim.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.stylishhim.com/" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content="https://www.stylishhim.com/twitter-image.jpg" />

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
      <body className={inter.className}>
        <Prvider>
          <ToastContainer />
          {children}
        </Prvider>
      </body>
    </html>
  );
}
