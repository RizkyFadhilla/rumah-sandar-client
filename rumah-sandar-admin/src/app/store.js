import { configureStore}  from "@reduxjs/toolkit"
import login from "../features/loginSlice"


export const store = configureStore({
    reducer: {
        login : login,


    }
})