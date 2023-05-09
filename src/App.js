import React from "react";
import Nav from "./Nav";
import Home from './Home';
import Products from "./Products";
import Product from "./Product";
import axios from "axios";
import {Routes, Route} from "react-router-dom";

function App() {
    const [load, setLoad] = React.useState(false);
    const [data, setData] = React.useState('');
    const wrap = "wrapper";

    const grabData = async () => {
        try {
            axios.get("https://jsonplaceholder.typicode.com/users/1").then(
                (response) => {
                    setData(response.data)
                }
            ).catch((err) => {
                console.log(err)
            })

            // const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
            // const data = await response.json();
            // setData(data)
        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        grabData();
        console.log("rendered")
    }, [load])

    console.log(data);

    return (
        <div className={wrap}>
            <Nav/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/products'} element={<Products/>}/>
                <Route path={'/products/:id'} element={<Product color={"red"}/>}/>
            </Routes>

            <button onClick={() => setLoad(true)}>Load Data</button>
            <h1>{load ? data.name : "not loaded"}</h1>
        </div>
    )
}

export default App;