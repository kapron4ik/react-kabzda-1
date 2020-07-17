import React from "react";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/Redux-store";
import App from "./App";
import ReactDOM from "react-dom";

const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;