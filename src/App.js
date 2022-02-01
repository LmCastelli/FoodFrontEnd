import {Route, Routes} from "react-router-dom"
import AddFoodForm from "./components/AddFood"
import EditFoodForm from "./components/EditFood"
import HomePage from "./components/Homepage.js"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/add" element={<AddFoodForm />} />
          <Route path="/food"  />
          <Route path="/food/:id" />
          <Route path="/food/edit/:id" element={<EditFoodForm />} />
        </Routes>
      </Header>
    </div>
  );
}

export default App;
