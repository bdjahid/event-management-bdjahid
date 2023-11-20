import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center text-5xl mt-10">
            <h2 className="text-warning">Oops!!!</h2>
            <Link className="text-lime-500" to="/">Back to home</Link>
        </div>
    );
};

export default ErrorPage;