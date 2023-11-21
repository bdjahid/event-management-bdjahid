import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";



const Services = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;