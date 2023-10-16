import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterValue: (state, action) => {
      return (state = action.payload);
    },
    // filteredContacts: state => {
    //   const normalizedFilter = state.toLowerCase();
    //   return state.contacts.filter(({ name }) =>
    //     name.toLowerCase().includes(normalizedFilter)
    //   );
    // },
  },
});
export const { filterValue } = filterSlice.actions;

export default filterSlice.reducer;
