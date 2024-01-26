import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishChoice'

export const store = configureStore({
    reducer: {
        dishes
    }
  })