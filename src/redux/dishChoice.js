import { createSlice } from '@reduxjs/toolkit';

export const dishChoice = createSlice({
    name: 'dishes',
    initialState: {
        selectedCategory: "APPETISERS"
    },
    redycers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.dishes.selectedCategory;
export const { filterCategory } = dishChoice.actions;
export default dishChoice.reducer;
