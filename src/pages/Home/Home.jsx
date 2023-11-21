import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "./ServiceCard";
import { useState } from "react";


const Home = () => {
    const services = useLoaderData();
    const [service, setService] = useState(6)
    console.log(services)
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    services.slice(0, service).map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className={service === services.length ? 'hidden' : ''}>
                <div className="text-center my-5">
                    <button onClick={() => setService(services.length)} className="btn btn-info w-full">Show All</button>
                </div>
            </div>
        </div>
    );
};

export default Home;