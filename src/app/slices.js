import { createReducer, createAction } from '@reduxjs/toolkit';

export const addNewContact = createAction('contact/addNewContact');

export const deleteContact = createAction('contact/deleteContact');

export const setFilter = createAction('filter/setFilter');

const storedContacts = localStorage.getItem('contacts');
const contactsInitialState = storedContacts ? JSON.parse(storedContacts) : [];
const filterInitialState = '';

export const contactsReducer = createReducer(contactsInitialState, {
  [addNewContact]: (state, action) => {
    const newState = [...state, action.payload];
    localStorage.setItem('contacts', JSON.stringify(newState));
    return newState;
  },

  [deleteContact]: (state, action) => {
    const newState = state.filter(contact => contact.id !== action.payload);
    localStorage.setItem('contacts', JSON.stringify(newState));
    return newState;
  },
});

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => (state = action.payload),
});

export const getContacts = state => state.contacts;

export const getFilterValue = state => state.filter;
