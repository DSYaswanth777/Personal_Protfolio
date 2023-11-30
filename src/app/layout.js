// Import global styles for consistent styling across the application
import "./globals.css";

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
        <title>Yaswanth's Portfolio</title> {/* Updated title tag */}
        <meta name="description" content="Explore Yaswanth's creative journey and accomplishments through a dynamic portfolio showcasing web development projects, skills, and experiences." />
        <meta name="keywords" content="Web Development, Portfolio, Projects, Skills, Yaswanth" />
        <meta name="author" content="Yaswanth" />
        <link rel="icon" href="./favicon.ico" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Yaswanth's Portfolio" />
        <meta property="og:description" content="Explore Yaswanth's creative journey and accomplishments." />
        <meta property="og:image" content="../../public/images/og_card.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yaswanth's Portfolio" />
        <meta name="twitter:description" content="Explore Yaswanth's creative journey and accomplishments." />
        <meta name="twitter:image" content="../../public/images/twitter_card.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
