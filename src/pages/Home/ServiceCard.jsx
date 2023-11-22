import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { id, image, name, price, details } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price : {price}</p>
                <p>{details.slice(0, 95)}<Link to={`/details/${id}`} className="text-info"> see more...</Link></p>
                <div className="card-actions justify-end">
                    <Link to="/services">
                        <button className="btn btn-info"> All Service</button>
                    </Link>
                    <Link to={`/details/${id}`}>
                        <button className="btn btn-info">Service Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;