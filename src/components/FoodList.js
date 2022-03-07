import React, {useState, useEffect} from "react";
import axios from "axios";
import Food from "./Food";

function FoodList() {

    const [foods, setFoods] = useState([]);

    useEffect(()=> {
        axios.get("https://food-for-beb.herokuapp.com/all")
        .then(res => {
            setFoods(res.data)
            console.log(res.data)
        })
        .catch(err =>{
            console.error(err)
        })
    }, [])

    return(
        <div>
            <h1>The foods go here!</h1>
            {foods.map((food) => {
                return(
                    <Food key={food.food_id} details={food} />
                );
            })}
        </div>
    )
}

export default FoodList;

