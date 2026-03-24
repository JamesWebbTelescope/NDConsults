import getServices, { goToBookingPage } from "../components/ApiServices";
import Layout from "../components/Layout";
import Profiles from "../components/Profiles";
// import { useNavigate } from "react-router-dom";
export default function Home() {
  // const navigate = useNavigate();
  return (
    <Layout>
<section className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-black bg-clip-text 
                       bg-size-[200%_200%] animate-gradient-colors text-glow
                       leading-tight">
          Welcome to NDConsults
        </h2>
        <p className="text-black max-w-xl mb-8">
          We think outside the box.
        </p>
        <Profiles />
        <div className="flex justify-center mt-10">
        <button className="px-6 py-3 bg-green text-white font-semibold rounded-lg hover:bg-green-400 transition-colors duration-300"
          onClick={() =>  goToBookingPage()}>
          Book a Consultation
        </button>
        <button className="px-6 py-3 bg-green text-white font-semibold rounded-lg hover:bg-green-400 transition-colors duration-300"
          onClick={() =>  getServices()}>
          Get available services
        </button>


      </div>
 
      </section>
    </Layout>
  );
}