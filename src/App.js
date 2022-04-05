import {Route, Routes} from "react-router-dom"
import AddFoodForm from "./components/AddFood"
import EditFoodForm from "./components/EditFood"
import HomePage from "./components/Homepage.js"
import Header from "./components/Header"
import FoodList from "./components/FoodList"
import Food from "./components/Food"

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/add" element={<AddFoodForm />} />
          <Route path="/food" element={<FoodList />} />
          <Route path="/food/:id" element={<Food />}/>
          <Route path="/food/edit/:id" element={<EditFoodForm />} />
        </Routes>
    </div>
  );
}

export default App;
