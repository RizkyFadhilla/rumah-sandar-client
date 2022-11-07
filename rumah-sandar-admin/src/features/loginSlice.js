import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value : []
}

export const loginSlice = createSlice({
     name : "login",
     initialState,
     reducers: {
        loginHandle : (state, action) => {

        }


     }

})


export default loginSlice.reducer