import {createReducer} from "@reduxjs/toolkit";
import {FETCH_PHOTOS} from "./photos.actions";


const initialState = ({
    loading: false,
    photos: [],
    photoPages: null
})

export default createReducer(initialState, {
    [FETCH_PHOTOS.REQUEST]: (state, action) => {
        state.loading = true
    },
    [FETCH_PHOTOS.SUCCESS]: (state, action) => {
        state.photos = action.payload?.data
        state.photoPages = action.payload?.pages
        state.loading = false
    }
})
