import Footer from "../components/footer/Footer";
import "./globals.css";
import Home from "./page";
import Map from "../map";

export default function RootLayout({}) {
  return (
    <html lang="en">
      <body>
        <Home />
        <Map />
        <Footer />
      </body>
    </html>
  );
}
