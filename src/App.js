import React from "react";
import Nav from "./Nav";
import Home from './Home';
import Products from "./Products";

function App(){
    const wrap ="wrapper"

    return (
        <div className={wrap}>
            <Nav/>
            <Home/>
            <Products/>
        </div>


    )
}

export  default App;