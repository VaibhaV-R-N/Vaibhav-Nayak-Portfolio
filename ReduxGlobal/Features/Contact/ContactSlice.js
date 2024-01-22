import { createSlice } from "@reduxjs/toolkit";

const ContactSlice = createSlice({
    name:"contact",
    initialState:{
        subject:"",
        message:""
    },

    reducers:{
        setSubject:(state,action)=>{
            state.subject = action.payload.subject
        },

        setMessage:(state,action)=>{
            state.message = action.payload.message
        }
    }
})

export  const {setSubject,setMessage} = ContactSlice.actions

export default ContactSlice.reducer