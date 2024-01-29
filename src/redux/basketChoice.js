import { createSlice } from '@reduxjs/toolkit';

export const basketChoice = createSlice({
    name: 'basket',
    initialState: {
        basketItems: []
    },
    reducers: {
        addItemToBasket: (state, action) => {
            const timeId = new Date().getTime()
            state.basketItems.push({
                id: timeId,
                dishId: action.payload.dish.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.dish.price
            })
        }, 
        deleteItemFromBasket: (state, action) => {
            state.basketItems = state.basketItems.filter(
                basketItem => basketItem.id !== action.payload.basketItemId
            )
        }
    }
})

export const getTotalPrice = state => {
    return state.basket.basketItems.reduce((total, basketItems) => {
        return basketItems.totalPrice + total
    }, 0)
}
export const getBasketItems = state => state.basket.basketItems;
export const { addItemToBasket, deleteItemFromBasket } = basketChoice.actions;
export default basketChoice.reducer;
