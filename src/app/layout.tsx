// import Header from "@/components/header/Header";
import Footer from "../components/footer/Footer";
import "./globals.css";
// import Home from "./page";
// import Map from "../map";
import Page from "@/about/page";

export default function RootLayout({}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {/* <Home />
        <Map /> */}
        <Page />
        <Footer />
        
      </body>
    </html>
  );
}
