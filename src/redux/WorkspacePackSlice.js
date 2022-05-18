import { createSlice } from "@reduxjs/toolkit";

const initialState={
  "pack": 1,
}

export const WorkspacePackSlice=createSlice({
    name:"Workspacepack",
    initialState,
    reducers:{
        addWPack :(state,action) =>{
            state.pack=action.payload;
        },
        
    },
})
export const {addWPack} = WorkspacePackSlice.actions;
export default WorkspacePackSlice.reducer;
