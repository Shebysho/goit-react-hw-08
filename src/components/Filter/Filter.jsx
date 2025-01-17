import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import s from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const handleChange = event => dispatch(changeFilter(event.target.value));

  return (
    <label htmlFor="filter" className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        id="filter"
        className={s.input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
}