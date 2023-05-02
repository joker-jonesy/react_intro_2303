import React from "react";

function Product(props){
    const [color, setColor]= React.useState(props.color);

    const toggleColor = ()=>{
        if(color===props.color){
            setColor("black")
        } else{
            setColor(props.color)
        }
    }


    return(
        <div onClick={toggleColor} style={{color:color}}>Name: {props.name}</div>
    )
}

export default Product;