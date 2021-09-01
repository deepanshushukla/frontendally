import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
    filteredData: null,
    category:''
};

export const okrSlice = createSlice({
    name: 'okr',
    initialState,
    reducers: {
        setOkrData: (state, action) => {
            state.data = action.payload;
            state.filteredData = action.payload;
            return state
        },
        setFilteredOkrData: (state, {payload: {category}}) => {
            state.filteredData = Object.fromEntries(
                Object.entries(state.data).filter(
                    ([key, value]) => value.category === category
                )
            );
            state.category = category;
            return state

        },
    }
});

// Action creators are generated for each case reducer function
export const { setOkrData, setFilteredOkrData } = okrSlice.actions

export default okrSlice.reducer