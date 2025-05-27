import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  content: null,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    abrirPopup: (state, action) => {
      state.isOpen = true;
      state.content = action.payload; // Pode ser a jogada clicada, por exemplo.
    },
    fecharPopup: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { abrirPopup, fecharPopup } = popupSlice.actions;
export default popupSlice.reducer;
