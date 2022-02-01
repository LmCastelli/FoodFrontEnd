import {Route, Routes} from "react-router-dom"
import AddFoodForm from "../src/foodOptions/AddFood"
import EditFoodForm from "../src/foodOptions/EditFood"
import HomePage from "./foodOptions/Homepage.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/add" element={<AddFoodForm />} />
        <Route path="/food"  />
        <Route path="/food/:id" />
        <Route path="/food/edit/:id" element={<EditFoodForm />} />
        
      </Routes>
    </div>
  );
}

export default App;
