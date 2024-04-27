import { Link } from 'react-router-dom';
import error from '../assets/error.png';
import { IoArrowBack } from "react-icons/io5";

const ErrorPage = () => {
    return (
        <div>
             <div className='text-center'>
            <img className='md:w-auto md:h-96 md:ml-96 mt-12 md:mt-48'  src={error}></img>
        <p className='font-bold'>This is a completely custom 404 error page.<br></br> it seems that page you are looking for on longer exists.</p>
        <Link to="/">
        <button className='mt-12 font-bold btn btn-outline'><IoArrowBack></IoArrowBack>BACK HOMEPAGE</button>
        </Link>
        
        </div>
        </div>
    );
};

export default ErrorPage;