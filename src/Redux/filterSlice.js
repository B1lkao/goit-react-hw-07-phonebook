
import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
    updateFilter(state) {
      return (state = '');
    },
  },
});

export const { setFilter, updateFilter } = filterSlice.actions;