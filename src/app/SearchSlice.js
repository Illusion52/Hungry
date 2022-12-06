import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    searchState: false,
    
}

const SearchSlice = createSlice({
    initialState,
    name: "search",
    reducers: {
        setOpenSearch: (state, action) => {
            state.searchState = action.payload.searchState
        },
        setCloseSearch: (state, action) => {
            state.searchState= action.payload.searchState
        }
    }
})

export const {setCloseSearch, setOpenSearch} = SearchSlice.actions

export const selectSearchState = (state) => state.search.searchState

export default SearchSlice.reducer