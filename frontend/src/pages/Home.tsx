import { useEffect, useState } from "react";
import getServices, { getTimeSlots, goToBookingPage } from "../components/ApiServices";
import Layout from "../components/Layout";
import Profiles from "../components/Profiles";
import Dropdown from "react-bootstrap/Dropdown";
// import { useNavigate } from "react-router-dom";

interface DisplayTutorial {
    services: string;
    start: string;
    end: string;
}

const holoLinkClass = `
    relative
    px-4 py-2
    text-green
    font-semibold
    rounded-lg
    transition-all
    duration-300
    hover:text-blue-400
    hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.9)]
    before:absolute
    before:inset-0
    before:rounded
    before:bg-blue-400
    before:opacity-20
    before:blur-xl
    before:scale-110
    before:transition-all
    before:duration-300
    hover:before:opacity-50
    hover:before:scale-80
    before:pointer-events-none
  `;

export default function Home() {
   const [timeslots, setTimeSlotData] = useState<DisplayTutorial[]>([])
   const [display, updateDisplay] = useState(false)
   const results: DisplayTutorial[] = [];
  // const navigate = useNavigate();
   useEffect(() => {
            const fetchData = async () => {
                const services = await getServices();
                const timeslots = await getTimeSlots();
                console.log("Welcome to the tutorials page")
                for(const tutorial of timeslots){
                    console.log(`Getting all tutorials`)
                    const time = timeslots.find(item => item.formatted_timestamp === tutorial.formatted_timestamp);
                    if(time){
                        results.push({
                                    services: services.find(item => item.id === tutorial.service_id)?.name || "Unknown Service",
                                    start: time.formatted_timestamp,
                                    end: time.formatted_timestamp_end
                                });
                            console.log(`Found matching time slot for tutorial: ${tutorial.formatted_timestamp}`)
                            console.log(time.formatted_timestamp)
                            console.log(time.formatted_timestamp_end)
                            }
                    }           
                setTimeSlotData(results);
            };
            fetchData();
        }, []);

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
        <button className="px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors duration-300"
          onClick={() =>  goToBookingPage()}>
          Book a Consultation
        </button>
        <button className="px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors duration-300"
          onClick={() =>  getTimeSlots()}>
          Get available services
        </button>
        </div>
        <div className="overlay-box relative text-center bg-blue-400 text-black uppercase text-sm font-semibold tracking-wide">
         <Dropdown>
                <Dropdown.Header>Available timeslots</Dropdown.Header>
                    {timeslots.map((item, index) => (
                        <Dropdown.Menu show key={index}>
                        <Dropdown.Item className={holoLinkClass} onClick={() => {
                                    // clearToken()
                                    updateDisplay(!display)
                                }}>{item.start}
                        </Dropdown.Item>
                        </Dropdown.Menu>
                        ))}
            </Dropdown>
        </div>
 
      </section>
    </Layout>
  );
}