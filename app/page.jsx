import HomeProperties from "../components/HomeProperties";
import Hero from "../components/Hero";
import InfoBoxes from "../components/InfoBoxes";
import FeaturedProperties from "../components/FeaturedProperties";

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </>
  );
};

export default HomePage;
