import { createSlice } from '@reduxjs/toolkit'

 const appSlice = createSlice({
  name: 'app',
  initialState:{
    isMenuOpen: true,
    selectedCategory:"New"
  },
  reducers: {
    toggleMenu: (state)=>{
        state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state)=>{
        state.isMenuOpen = false;
    },
    setSelectedCategory: (state, action)=>{
      state.selectedCategory =action.payload
    }
  },
  
    
})

export const { toggleMenu, closeMenu, setSelectedCategory } = appSlice.actions
export default appSlice.reducer