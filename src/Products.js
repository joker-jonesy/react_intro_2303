import React from "react";
import Product from "./Product";

function Products(){

    const list =[
        {
            name:'luke'
        },
        {
            name:'prof'
        },
        {
            name:'selene'
        }
    ]

    const productEles = list.map((itm)=>
        <Product name={itm.name} color={"red"}/>
    )

    return(
        <>
            <h1>Hello</h1>
            <div>
                {productEles}
            </div>
        </>

    )
}

export default Products;