

export const isLoading = (state) => state.contacts.loading;

export const isError = (state) => state.contacts.error;

import { createSelector } from "@reduxjs/toolkit";


export const itemsContacts = (state) => state.contacts.items;
export const filtersContacts = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [itemsContacts, filtersContacts],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  }
);