import React from "react";
import {Link} from "react-router-dom";

function Products(){

    // redux store

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

    const productEles = list.map((itm,idx)=>
        <Link key={idx} to={'/products/'+idx}>{itm.name}</Link>
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