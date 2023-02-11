import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'app/slices';
import { addNewContact } from 'app/slices';
import style from './ContactsForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addContact = e => {
    e.preventDefault();
    let nameOntheList = false;
    const form = e.target;
    const name = e.target.name.value;
    const number = e.target.number.value;
    const toLowerCase = name.toLowerCase();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    contacts.forEach(({ name }) => {
      if (name.toLowerCase() === toLowerCase) {
        alert(`${name} is already in contacts`);
        nameOntheList = true;
        form.reset();
      }
    });

    if (nameOntheList) return;

    dispatch(addNewContact(newContact));
    form.reset();
  };
  return (
    <form className={style.formSubmit} onSubmit={addContact}>
      <label className={style.formSubmit__name}>
        Name
        <input
          autoComplete="off"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={style.formSubmit__number}>
        Number
        <input
          autoComplete="off"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={style.formSubmit__button} type="submit">Add contact</button>
    </form>
  );
};
export default ContactForm;