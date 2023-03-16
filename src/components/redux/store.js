import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reduxdata";
export default configureStore({
    reducer:{
        rate:counterReducer,
        
    }
})
