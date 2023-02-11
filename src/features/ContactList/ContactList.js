import { useSelector, useDispatch } from 'react-redux';

import { getFilterValue, getContacts } from 'app/slices';
import { deleteContact } from 'app/slices';
import style from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = idToDelete => {
    dispatch(deleteContact(idToDelete));
  };

  return filteredContacts.length > 0 ? (
    <ul className={style.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={style.id__list} key={id}>
                <p className={style.id__nameList}>{name}:  </p>
                <p className={style.id__numberList}> {number}</p>
            <button className={style.id__button} type="submit" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No contacts.</p>
  );
};

export default ContactList;