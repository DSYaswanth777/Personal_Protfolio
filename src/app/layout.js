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
    // Define the HTML structure of the layout
    <html lang="en">
      <head>
        {/* Set the website's favicon */}
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>
        {/* Render the content of the website */}
        {children}
      </body>
    </html>
  );
}
