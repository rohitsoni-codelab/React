import React from "react";
function Card(props){
    const classe='class'+props.className
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}
export default Card;