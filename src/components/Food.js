import React from "react";
import { useNavigate } from "react-router-dom";

const Food = (props) => {
    const {details} = props;
    const {
       food_id, 
       name,
       purpose,
       price,
       delivers,
       unhealthy,
       heavy,
    } = details;

    return (
        <div>
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p>Purpose: {purpose}</p>
            <p>Delivers: {delivers}</p>
            <p>Unhealthy: {unhealthy}</p>
            <p>Heavy: {heavy}</p>
        </div>
    )
}
export default Food