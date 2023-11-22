import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

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
        // sign In 
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                // navigate after login
                navigate(location?.state ? location.state : '/')
                setSuccess('User Logged in Successfully')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const handleGoogleSign = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                // setUser(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubSign = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left my-10">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="text-center mb-8">
                        <button onClick={handleGoogleSign} className="btn btn-outline mr-4">Google</button>
                        <button onClick={handleGithubSign} className="btn btn-outline">Github</button>
                    </div>
                    <p className="text-center mb-5">New to create account<Link to="/register" className="ms-1 underline text-blue-300">Register</Link></p>
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

export default Login;