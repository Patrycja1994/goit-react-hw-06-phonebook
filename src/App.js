import ContactForm from 'features/ContactsForm/ContactsForm';
import ContactList from 'features/ContactList/ContactList';
import Filter from 'features/Filter/Filter';
import style from './App.module.css';

const App = () => {
  return (
    <div className={style.formBox}> 
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;