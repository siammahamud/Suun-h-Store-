import OfferModal from "../../components/Modal/OfferModal";
import OfferTimer from "../../components/OfferTimer/OfferTimer";


const Home = () => {
  const targetDate = "2024-12-20T00:00:00";
  return (
    <div>
      <OfferModal/>
      <OfferTimer targetDate={targetDate} />  
    </div>
  );
};

export default Home;
