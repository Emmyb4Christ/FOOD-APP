import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import food1 from "./Images/food1.png";
import food2 from "./Images/food2.png";
import food3 from "./Images/food3.png";
import { AuthContext } from "./Context/AuthContext";
import React from "react";
import Profile from "./Pages/Profile";

const data = [
  {
    food: food1,
    name: "Stir Fry Pasta",
    content: "Stir fry pasta yada yada yada because of Sesan",
  },
  {
    food: food2,
    name: "Meat Balls",
    content: "Stir fry pasta yada yada yada because of Sesan",
  },
  {
    food: food3,
    name: "Burger Meal",
    content: "Stir fry pasta yada yada yada because of Sesan",
  },
  // {
  //   food: food1,
  //   name: "Stir Fry Pasta",
  //   content: "Stir fry pasta yada yada yada because of Sesan",
  // },
  // {
  //   food: food2,
  //   name: "Meat Balls",
  //   content: "Stir fry pasta yada yada yada because of Sesan",
  // },
  // {
  //   food: food3,
  //   name: "Burger Meal",
  //   content: "Stir fry pasta yada yada yada because of Sesan",
  // },
  // { food: food1, name: "Stir Fry Pasta" },
  // { food: food2, name: "Meat Balls" },
  // { food: food3, name: "Burger Meal" },
];

function App() {
  const [user, setUser] = React.useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Router>
          <Routes>
            {!user && (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
              </>
            )}
            {user && <Route path="/" element={<Dashboard data={data} />} />}
          </Routes>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
