import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <h1>Welcome to our Phonebook App!</h1>
      {isLoggedIn ? (
        <p>You are logged in. You can manage your contacts now.</p>
      ) : (
        <p>Please register or login to use the app.</p>
      )}
    </div>
  );
}