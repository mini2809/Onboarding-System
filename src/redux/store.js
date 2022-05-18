import { configureStore } from "@reduxjs/toolkit"; 
import WelcomeSlice from "./WelcomeSlice";
import WorkspaceDetailsSlice from "./WorkspacedetailSlice";
import WorkspacePackSlice from "./WorkspacePackSlice";

const store = configureStore({
    reducer:{
        Welcome:WelcomeSlice,
        Workspacedetails:WorkspaceDetailsSlice,
        Workspacepack:WorkspacePackSlice,
    },
});

export default store;