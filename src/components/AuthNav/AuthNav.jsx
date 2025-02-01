import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/authSelectors';
import styles from './Navigation.module.css'; 

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
        </li>

        {isLoggedIn && (
          <li className={styles.navItem}>
            <NavLink to="/contacts" className={styles.navLink}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;