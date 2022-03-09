import { createReducer } from '@reduxjs/toolkit';
import { checkGenre } from './action';


const initialState = {
  activeGenre: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checkGenre, (state, action) => {
      state.activeGenre = action.payload ;
    });
});

export { reducer };
