import { useContext } from "react";
import { authContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
   
    const {user , loading} = useContext(authContext);
        if(loading){
            return;
        }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes={
    children: PropTypes.object 
}