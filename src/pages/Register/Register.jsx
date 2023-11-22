import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [show, setShow] = useState(false);
    const { createUser } = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(name, photo, email, password, terms)


        // reset error
        setError('')
        setSuccess('')

        // validation and condition
        if (password < 6) {
            setError('Password should be at least 6 characters or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Password should have at least one uppercase characters');
            return;
        }

        else if (!terms) {
            setError('Please accept our terms and conditions');
            return;
        }

        // create User
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User Created Successfully')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left my-10">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input type={show ? "text" : "password"}
                                    name="password" placeholder="password" className="input input-bordered w-full" required />
                                <span className="mt-3 absolute top-1 right-2" onClick={() => setShow(!show)}>
                                    {
                                        show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <div className="mt-2">
                                <input type="checkbox" name="terms" id="terms" />
                                <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Condition</a></label>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="text-center mb-8">
                        <button className="btn btn-outline mr-4">Google</button>
                        <button className="btn btn-outline">Github</button>
                    </div>
                    <p className="text-center mb-5">Already have an account<Link to="/login" className="ms-1 underline text-blue-800">Login</Link></p>
                    <div className="text-center mb-5">
                        {
                            error && <p className="text-red-800">{error}</p>
                        }
                        {
                            success && <p className="text-green-800">{success}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;