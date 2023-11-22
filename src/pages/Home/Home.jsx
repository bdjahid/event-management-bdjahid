import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "./ServiceCard";
import ExtraSection from "../ExtraSection/ExtraSection";
import ExtraSectionIcon from "../ExtraSectionIcon/ExtraSectionIcon";


const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <ExtraSection></ExtraSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    services.slice(0, 6).map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <ExtraSectionIcon></ExtraSectionIcon>
        </div>
    );
};

export default Home;