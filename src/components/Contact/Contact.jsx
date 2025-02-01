import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOps';
import s from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={s.contact}>
      <p className={s.name}>{name}:</p>
      <p className={s.number}>{number}</p>
      <button type="button" onClick={handleDelete} className={s.button}>
        Delete
      </button>
    </div>
  );
}