import { configureStore } from '@reduxjs/toolkit'
import okrReducer from "./slices/okrslice";

export const store = configureStore({
    reducer: { okr: okrReducer },
});