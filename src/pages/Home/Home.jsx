import OfferModal from "../../components/Modal/OfferModal";
import OfferTimer from "../../OfferTimer/OfferTimer";

const Home = () => {
  const targetDate = "2024-12-15T00:00:00";
  return (
    <div>
      <OfferModal/>
      <OfferTimer targetDate={targetDate} />
      <div>Home</div>
    </div>
  );
};

export default Home;
