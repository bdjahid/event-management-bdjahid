import { Link } from 'react-router-dom';
import banner from '../../assets/banner.webp';

const ExtraSection = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-8">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} className="rounded-lg shadow-2xl w-full h-full" />
                <div>
                    <h1 className="text-3xl font-bold">Programming Course!</h1>
                    <p className="py-6">
                        JavaScript (JS) is a versatile scripting language used for web development, allowing dynamic and interactive elements on websites. Its flexibility and wide usage make it pivotal in front-end and back-end development. JS Vanilla (JSVA) refers to using pure JS without frameworks, offering a deep understanding of its core functionalities. On the other hand, PHP (Hypertext Preprocessor) is a server-side scripting language primarily for web development, enabling dynamic content generation. It excels in handling .</p>
                    <Link to="/services">
                        <button className="btn btn-info">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;