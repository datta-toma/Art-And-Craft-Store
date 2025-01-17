
import useAuth from '../../hook/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <span className="loading ml-96 loading-ring loading-lg"></span>
    }

    if (!user){
        return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
    }
    return (
        <div>
           {children}
        </div>
    );
};

export default PrivateRouter;