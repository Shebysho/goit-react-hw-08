import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { selectIsLoggedIn } from '../../redux/auth/authSelectors'; 
import s from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" className={s.link}>
        Home
      </NavLink>
      {isLoggedIn && ( 
        <NavLink to="/contacts" className={s.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}