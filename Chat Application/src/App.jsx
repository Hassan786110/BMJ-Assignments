import react from "react";
import { Routes, Route } from "react-router-dom";
import { Signup, Login } from "./component/Signup & Login";
import { Home, Profile, Todo } from "./component/Dashboard";

const App = _ => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Todo" element={<Todo />} />
    </Routes>
  )
}

export default App;