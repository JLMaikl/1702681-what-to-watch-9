import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';


export const checkGenre = createAction(
  ActionType.CheckGenre,
  (activeGenre: string) => ({
    payload: activeGenre,
  }),
);


