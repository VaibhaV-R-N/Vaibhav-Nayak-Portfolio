import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name:"menu",
    initialState:{
        open:false,
        current:""
    },
    reducers:{
        toggleMenu:(state)=>{
            state.open = state.open?false:true
        },
        setCurrent:(state,action)=>{
            state.current = action.payload.current
        }
    }
})

export const {toggleMenu,setCurrent} = MenuSlice.actions

export default MenuSlice.reducer