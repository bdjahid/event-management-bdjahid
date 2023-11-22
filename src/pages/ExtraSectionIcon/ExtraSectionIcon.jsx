import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.jpg';
import icon6 from '../../assets/icon6.png';
import icon7 from '../../assets/icon7.png';
import icon8 from '../../assets/icon8.jpeg';
import icon9 from '../../assets/icon9.png';
import icon10 from '../../assets/icon10.png';
import icon13 from '../../assets/icon13.png';
import icon12 from '../../assets/icon12.png';
import icon14 from '../../assets/java-vs-javascript-1.png';
import './ExtraSectionIcon.css'

const ExtraSectionIcon = () => {
    return (
        <div>
            <h2 className='text-center text-5xl font-bold'>Programming Course</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-60 gap-5 my-10 bg-slate-50'>
                <img className='w-48 h-48 rounded' src={icon1} alt="" />
                <img className='w-48 h-48 rounded' src={icon2} alt="" />
                <img className='w-48 h-48 rounded' src={icon3} alt="" />
                <img className='w-48 h-48 rounded' src={icon4} alt="" />
                <img className='w-48 h-48 rounded' src={icon5} alt="" />
                <img className='w-48 h-48 rounded' src={icon6} alt="" />
                <img className='w-48 h-48 rounded' src={icon7} alt="" />
                <img className='w-48 h-48 rounded' src={icon8} alt="" />
                <img className='w-48 h-48 rounded' src={icon9} alt="" />
                <img className='w-48 h-48 rounded' src={icon10} alt="" />
                <img className='w-48 h-48 rounded' src={icon13} alt="" />
                <img className='w-48 h-48 rounded' src={icon12} alt="" />
            </div>
            <p className='text-center my-10 font-semibold text-3xl'>Each of these languages offers unique <br></br>features and strengths, catering to diverse needs <br></br>various domains in the vast landscape of software development</p>
            <div className='flex justify-center mb-10'>
                <img className='rounded-xl w-5/6 h-72' src={icon14} alt="" />
            </div>
        </div>
    );
};

export default ExtraSectionIcon;