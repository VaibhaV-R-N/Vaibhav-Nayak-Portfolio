'use client'

import { configureStore,combineReducers } from "@reduxjs/toolkit";
import MenuReducer from "./Features/Menu/MenuSlice";
import Contactreducer from "./Features/Contact/ContactSlice"

const rootReducer = combineReducers({
    Menu:MenuReducer,
    Contact:Contactreducer,

})

export const store = configureStore({
    reducer:rootReducer
})