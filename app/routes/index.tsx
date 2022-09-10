import Contact from "~/components/Contact/Contact";
import Footer from "~/components/Footer/Footer";
import Gallery from "~/components/Gallery/Gallery";
import Navbar from "~/components/Nav/Navbar";
import HeaderSection from "~/components/Section/HeaderSection";
import Main from "~/components/Section/Main";
import Offer from "~/components/Section/Offer";

export default function Index() {
  return (
    <>
      <Navbar />
      <Main />
      <HeaderSection />
      <Offer />
      <HeaderSection />
      <Gallery />
      <HeaderSection />
      <Contact />
      <Footer />
    </>
  );
}
