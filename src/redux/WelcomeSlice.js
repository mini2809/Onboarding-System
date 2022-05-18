import { createSlice } from "@reduxjs/toolkit";


const initialState={
    "currentStep":1,
    "fullName":"",
    "displayName":"",
    "steps":["/","/addworkspacedetails" ,"/workspacepack","/success"],
}

export const WelcomeSlice=createSlice({
    name:"Welcome",
    initialState,
    reducers:{
        addFullName :(state,action) =>{
            state.fullName=action.payload;
        },
        addDisplayName:(state,action)=>{
            state.displayName = action.payload;
        },
        incrementcurrentstep:(state)=>{
            if(state.currentStep < 4)
            state.currentStep+=1;
        },
    }

})

export const {addFullName,addDisplayName,incrementcurrentstep} = WelcomeSlice.actions;
export default WelcomeSlice.reducer;