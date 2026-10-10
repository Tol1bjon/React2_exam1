import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./Todo";

export const Store = configureStore({
    reducer: {
        Data: DataReducer
    }
})
