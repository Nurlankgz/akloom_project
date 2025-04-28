import Footer from "../components/footer/Footer";
import "./globals.css";
import Home from "./page";

export default function RootLayout({}) {
  return (
    <html lang="en">
      <body>
        
        <Home />
        <Footer />
      </body>
    </html>
  );
}
