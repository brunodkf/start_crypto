
import { Banner } from "@/app/components/Banner";
import CoinList from "./components/CoinList";
import Introduction from "./components/Introduction";
import { Navbar } from "./components/Navbar";
import Benefit from "./components/Benefit";
import Feedbacks from "./components/Feedbacks";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { Price } from "./components/Price";

export default function Home() {
  return (
    <main className="w-full h-full bg-global font-montserrat relative">
      <Navbar />
      <Banner />
      <CoinList/>
      <Introduction />
      <Benefit/>
      <Price/>
      <Feedbacks/>
      <About/>
      <CallToAction/>
      <Footer/>
      <BackToTop/>
    </main>
  );
}
