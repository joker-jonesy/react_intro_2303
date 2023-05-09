import React from "react";
import {Link, NavLink} from "react-router-dom";

function Nav(){
    return(
        <nav>
            {/*<Link to={'/'}>HOME</Link>*/}
            {/*<Link to={'/products'}>PRODUCTS</Link>*/}
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } to={'/'}>HOME</NavLink>
            <NavLink to={'/products'}>PRODUCTS</NavLink>
        </nav>
    )
}

export default Nav;