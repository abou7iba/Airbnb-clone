import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Live from "./components/Live";


export default function Home() {
  return (
    <>
      <Header />
  <main>
    <Banner />
    <Explore />
    <Live />
  </main>
  <Footer />
    </>
  );
}
