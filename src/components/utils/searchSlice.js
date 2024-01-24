import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "Search",
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            // state = {...state, ...action.payload};
            state = Object.assign(state, action.payload);
        }
    }
})


export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;