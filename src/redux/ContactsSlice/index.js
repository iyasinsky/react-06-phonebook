import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '067-459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '+38 (050) 443 89 12' },
      { id: 'id-3', name: 'Eden Clements', number: '(093)-645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '0972279126' },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
