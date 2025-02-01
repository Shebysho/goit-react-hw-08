import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  
    return isLoggedIn ? Component : <Navigate to={redirectTo} />;
  };