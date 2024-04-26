import { Link } from 'react-router-dom';
import error from '../assets/error.png';

const ErrorPage = () => {
    return (
        <div>
             <div className='text-center'>
            <img className='w-auto h-96 ml-96 mt-48'  src={error}></img>
        <p className='mt-5'>This is a completely custom 404 error page.<br></br> it seems that page you are looking for on longer exists.</p>
        <Link to="/">
        <button className='mt-12 btn btn-outline'>BACK HOMEPAGE</button>
        </Link>
        
        </div>
        </div>
    );
};

export default ErrorPage;