import React from "react";
import {useParams} from "react-router-dom";

function Product(props){
    const [color, setColor]= React.useState(props.color);
    // const [name, setName]=React.useState("")
    const params = useParams();

    // grabbing data from a redux store

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

    // React.useEffect(()=>{
    //     setName(list[params.id].name)
    // },[params.id])

    const toggleColor = ()=>{
        if(color===props.color){
            setColor("black")
        } else{
            setColor(props.color)
        }
    }


    return(
        <div onClick={toggleColor} style={{color:color}}>Name: {list[params.id].name}</div>
    )
}

export default Product;