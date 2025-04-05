
import { Banner } from "@/app/components/Banner";
import CoinList from "./components/CoinList";
import Introduction from "./components/Introduction";
import { Navbar } from "./components/Navbar";
import Benefit from "./components/Benefit";
import Feedbacks from "./components/Feedbacks";

export default function Home() {
  return (
    <main className="w-full h-full bg-global font-montserrat">
      <Navbar />
      <Banner />
      <CoinList/>
      <Introduction />
      <Benefit/>
      <Feedbacks/>

      <div className="w-full h-svh"></div>
    </main>
  );
}
