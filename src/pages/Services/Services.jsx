import { Link, useLoaderData } from "react-router-dom";
import Service from "../Service/Service";



const Services = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <h1 className="text-center text-5xl font-bold">Us all Programming course</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="text-center mb-10">
                <Link to="/">
                    <button className="btn btn-info w-full">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;