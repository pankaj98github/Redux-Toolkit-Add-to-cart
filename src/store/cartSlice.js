import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",

    initialState: [],

    //for change the state
    reducers: {

        add(state, action) {
            state.push(action.payload);
        },

        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        }

    }
})

export const {add, remove} = cartSlice.actions;  //actions is a property

export default cartSlice.reducer;
