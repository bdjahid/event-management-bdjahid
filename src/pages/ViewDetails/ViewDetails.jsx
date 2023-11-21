import { useLoaderData, useParams } from "react-router-dom";



const ViewDetails = () => {
    const services = useLoaderData();
    console.log(services)
    const { id } = useParams();
    console.log(id)
    const idInt = parseInt(id);
    const service = services.find(service => service.id == idInt)
    console.log(service)
    return (
        <div className="card-body bg-base-100 shadow-xl">
            <figure><img className="w-full rounded-xl" src={service.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{service.name}</h2>
                <p>{service.details}</p>
                <div className="card-actions">
                    <button className="btn btn-success">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;