import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishChoice'
import basket from './basketChoice'

export const store = configureStore({
    reducer: {
        dishes,
        basket
    }
  })