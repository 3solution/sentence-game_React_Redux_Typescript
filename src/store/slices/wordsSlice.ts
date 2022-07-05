import { createSlice } from '@reduxjs/toolkit';

export const wordsSlice = createSlice({
  name: 'words',
  initialState: {
    when: '',
    who: '',
    what: '',
    where: '',
  },
  reducers: {
    setWhen: (state, payload) => {
      state.when = payload.payload;
    },
    setWho: (state, payload) => {
      state.who = payload.payload;
    },
    setWhat: (state, payload) => {
      state.what = payload.payload;
    },
    setWhere: (state, payload) => {
      state.where = payload.payload;
    },
    setClear: state => {
      state.when = '';
      state.what = '';
      state.where = '';
      state.who = '';
    },
  },
});

export const { setWhen, setWhat, setWhere, setWho, setClear } = wordsSlice.actions;

export default wordsSlice.reducer;
