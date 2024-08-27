import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/providers";
// Metadata for the website
export const metadata = {
  title: "Yaswanth's Portfolio",
  description:
    "Explore Yaswanth's creative journey and accomplishments through a dynamic portfolio showcasing web development projects, skills, and experiences.",
};

// RootLayout component serves as the main layout for the entire portfolio website
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Yaswanth&apos;s Portfolio: Inspiring Projects and Professional
          Achievements Revealed
        </title>
        <meta
          name="description"
          content="Explore Yaswanth's creative journey and accomplishments through a dynamic portfolio showcasing web development projects, skills, and experiences."
        />
        <meta
          name="keywords"
          content="Web Development, Portfolio, Projects, Skills, Yaswanth, Yaswanth Dasari, yaswanthdasari, HTML, CSS, JavaScript, React, Frontend Development"
        />
        <meta name="author" content="Yaswanth" />
        <link rel="icon" href="./favicon.ico" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Yaswanth's Portfolio" />
        <meta
          property="og:description"
          content="Explore Yaswanth's creative journey and accomplishments."
        />
        <meta property="og:image" content="../../public/images/og_card.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.yaswanthdasari.in/" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yaswanth's Portfolio" />
        <meta name="publisher" content="Yaswanth Dasari" />
        <meta name="robots" content="index, follow" />
        <meta
          name="twitter:description"
          content="Explore Yaswanth's creative journey and accomplishments."
        />
        <meta
          name="twitter:image"
          content="../../public/images/twitter_card.png"
        />
               <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/plus-jakarta-display.min.css"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `  
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
        page_path:window.location.pathname,
      });
    `,
          }}
        />
      </head>
      <body>
        <Providers>
          {children}
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
