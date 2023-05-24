import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { emptyMeme } from 'orsys-tjs-meme';

const initialState = emptyMeme

const current = createSlice({
    name: 'current',
    initialState,
    reducers: {
        changeMeme: (state, action) => {
            Object.assign(state, action.payload);
        },
        clearMeme: (state, action) => {
            Object.assign(state, emptyMeme);
        }
    },
    extraReducers:(b)=>{
        b.addCase(saveCurrent.fulfilled,(s,a)=>{
            Object.assign(s,a.payload);
        })
    }
});
export const saveCurrent = createAsyncThunk('current/save', async (meme) => {
    const pr = await fetch(`http://localhost:5679/memes${undefined !== meme.id ? '/' + meme.id : ''}`, {
        method: undefined !== meme.id ? 'PUT' : 'POST',
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(meme)
    })
    return await pr.json();
})
export const { changeMeme, clearMeme } = current.actions

export default current.reducer