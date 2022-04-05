import axios from "axios";
import React, {useState} from "react";

import { useNavigate } from "react-router-dom";

const baseURL = "food-for-beb.herokuapp.com"
const initialValues = {
    name: "",
    purpose: "", 
    price: 0,
    delivers: "",
    unhealthy: "",
    heavy: "", 
}

function AddFoodForm() {
    const [foodValues, setFoodValues] = useState(initialValues)
    const navigate = useNavigate() 

    const handleChange = e => {
        setFoodValues({...foodValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`${baseURL}`, foodValues)
            .then(resp => {
                console.log(resp)
                navigate("/food")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <section>
                <h1>Add a food</h1>
                <form onSubmit={handleSubmit}>
                    <label>Food Name</label>
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        value={foodValues.name}
                        onChange={handleChange}
                        maxLength="100"
                        required="true"
                    />

                    <label>Purpose</label>
                    <input 
                        id="purpose"
                        name="purpose"
                        type="text"
                        value={foodValues.purpose}
                        onChange={handleChange}
                        maxLength="30"
                        required="true"
                    />

                    <label>Price</label>
                    <input 
                        id="price"
                        name="price"
                        type="number"
                        value={foodValues.price}
                        onChange={handleChange}
                        maxLength="1"
                        required="true"
                    />

                    <label>Delivers</label>
                    <input 
                        id="delivers"
                        name="delivers"
                        type="text"
                        value={foodValues.delivers}
                        onChange={handleChange}
                        maxLength="10"
                        required="true"
                    />

                    <label>Unhealthy</label>
                    <input 
                        id="unhealthy"
                        name="unhealthy"
                        type="text"
                        value={foodValues.unhealthy}
                        onChange={handleChange}
                        maxLength="3"
                        required="true"
                    />

                    <label>Heavy</label>
                    <input 
                        id="heavy"
                        name="heavy"
                        type="text"
                        value={foodValues.heavy}
                        onChange={handleChange}
                        maxLength="3"
                        required="true"
                    />
                    <button>Add This Food</button>
                </form>
            </section>
        </div>
    )
}
export default AddFoodForm;
