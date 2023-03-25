import { createSlice } from '@reduxjs/toolkit';
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
    likeTuit: (state, action) => {
            const tuit = state.find((t) => t._id === action.payload);
            if (tuit) {
                tuit.liked = true;
                tuit.likes += 1;
            }
        },
        unlikeTuit: (state, action) => {
            const tuit = state.find((t) => t._id === action.payload);
            if (tuit) {
                tuit.liked = false;
                tuit.likes -= 1;
            }
        },
    },
});

export const { likeTuit, unlikeTuit, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
