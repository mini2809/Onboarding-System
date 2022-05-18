import { createSlice } from "@reduxjs/toolkit";

const initialState={
    "wName":"",
    "wurl":"",
}

export const WorkspacedetailSlice=createSlice({
    name:"Workspacedetails",
    initialState,
    reducers:{
        addWName :(state,action) =>{
            state.wName=action.payload;
        },
        addWUrl:(state,action)=>{
            state.wurl = action.payload;
        },
    },
})
export const {addWName,addWUrl} = WorkspacedetailSlice.actions;
export default WorkspacedetailSlice.reducer;
