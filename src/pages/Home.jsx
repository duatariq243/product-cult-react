import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Launches from "../components/Launches";
import Footer from "../components/Footer";
import Trending from "../components/Trending";
import FeaturedMembers from "../components/FetauredMembers";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trending/>
      <FeaturedMembers/>
      <Launches />
      <Footer />
      
    </>
  );
}

export default Home;
