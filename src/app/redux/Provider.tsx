"use client";

import { Provider } from "react-redux";
import React from "react";
import store from "./store";
interface AppProps  {
    children: React.ReactNode;
}

const Providers: React.FC<AppProps> = ({children}) => { 
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers;