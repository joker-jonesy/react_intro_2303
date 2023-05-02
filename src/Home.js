import React from "react";

function Home(){
    const [count, setCount] = React.useState(0)
    const [color, setColor]= React.useState("red");

    const style = {
        color: color
    }

    const changeColor = (color, num)=>{
        // loop
        // conditional
        // return
        setColor(color)
        setCount(count+num);
    }

    return(
        <>
            <h1>Hello World</h1>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
            <button onClick={()=>changeColor("green", 5)}>Green</button>
            <button onClick={()=>changeColor("blue", 10)}>Blue</button>
            <button onClick={()=>changeColor("red", 20)}>Red</button>
            <h2 style={style}>{count}</h2>
        </>
    )
}

export default Home;