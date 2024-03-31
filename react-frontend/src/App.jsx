import Heading from "./components/Heading";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import JokeDisplay from "./components/JokeDisplay";
import CookieConsentBanner from "./components/CookieConsentBanner";

function App() {
  return (
    <>
      <div className="relative">
        <Heading />
        <Banner />
        <JokeDisplay />
        <div className="h-[1px] w-full bg-[#d5d5d5]"></div>
        <Footer />
      </div>

      <div className="fixed bottom-0 w-full">
        <CookieConsentBanner />
      </div>
    </>
  );
}

export default App;
