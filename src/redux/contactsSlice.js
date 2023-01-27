import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { nanoid } from 'nanoid';

const persistConfig = {
  key: 'contacts',
  storage,
};

const initialContacts = { contacts: [] };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContactReducer: {
      reducer({ contacts }, action) {
        contacts.push(action.payload);
      },
      prepare({ name, phone }) {
        return {
          payload: {
            id: nanoid(),
            name,
            phone,
          },
        };
      },
    },

    deleteContactReducer({ contacts }, action) {
      const idx = contacts.findIndex(element => {
        return element.id === action.payload;
      });
      contacts.splice(idx, 1);
    },

    clearAllContactReducer({ contacts }) {
      contacts.length = 0;
    },
  },
});

export const {
  addContactReducer,
  deleteContactReducer,
  clearAllContactReducer,
  writeFromLocaleStorage,
} = contactsSlice.actions;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
