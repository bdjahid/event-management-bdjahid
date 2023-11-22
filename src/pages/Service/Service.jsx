import { Link } from "react-router-dom";


const Service = ({ service }) => {
    const { id, image, name, price, title } = service;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${id}`}>
                            <button className="btn btn-info">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;