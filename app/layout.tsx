import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, Libre_Bodoni } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-dm-serif",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-dm-sans",
});

const libreBodoni = Libre_Bodoni({
  weight: ["700"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-libre-bodoni",
});

export const metadata: Metadata = {
  title: "Advance Camp",
  description: "Advance Camp for Scouts of America 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Description no longer than 155 characters */}
        <meta
          name="description"
          content="Advance Camp for Scouts of America 2024"
        />

        {/* Product Name */}
        <meta
          name="product-name"
          content="Advance Camp for Scouts of America 2024"
        />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ui8" />
        <meta
          name="twitter:title"
          content="Advance Camp for Scouts of America 2024"
        />
        <meta
          name="twitter:description"
          content="Advance Camp | Scouts of America | 2024"
        />
        <meta name="twitter:creator" content="@ui8" />
        {/* Twitter Summary card images must be at least 120x120px */}
        <meta
          name="twitter:image"
          content="https://ui8-oasis-9c5d8ffa82b1.herokuapp.com/img/twitter-card.png"
        />

        {/* Open Graph data for Facebook */}
        <meta
          property="og:title"
          content="Advance Camp for Scouts of America 2024"
        />
        <meta property="og:type" content="Article" />
 
        <meta
          property="og:image"
          content="https://ui8-oasis-9c5d8ffa82b1.herokuapp.com/fb-og-image.png"
        />
        <meta
          property="og:description"
          content="Advance Camp for Scouts of America - 2024."
        />
        <meta
          property="og:site_name"
          content="Advance Camp 2024"
        />
        <meta property="fb:admins" content="132951670226590" />

        {/* Open Graph data for LinkedIn */}
        <meta
          property="og:title"
          content="Advance Camp 2024"
        />
 
        <meta
          property="og:image"
          content="https://ui8-oasis-9c5d8ffa82b1.herokuapp.com/img/linkedin-og-image.png"
        />
        <meta
          property="og:description"
          content="Advance Camp 2024"
        />

        {/* Open Graph data for Pinterest */}
        <meta
          property="og:title"
          content="Advance Camp for Scouts of America 2024"
        />

        <meta
          property="og:description"
          content="Advance Camp | Scouts of America | 2024"
        />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerif.variable} ${libreBodoni.variable} font-sans antialiased text-14r text-white bg-secondary-500`}
      >
        {children}
      </body>
    </html>
  );
}

//TODO: REPLACE back in code with advance camp badge
/* <meta
property="og:image"
content="https://ui8-oasis-9c5d8ffa82b1.herokuapp.com/img/pinterest-og-image.png"
/> */

/* <meta
property="og:url"
content="https://ui8.net/jos-creative/products/hidden-oasis---hotel--resort-website-coded-template"
/> */
