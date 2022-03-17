import Login from "./component/Login";
import Signup from "./component/Signup";
import Dashboard from "./component/Dashboard";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Signup" element={< Signup/>}/>
      <Route path="/Dashboard" element={< Dashboard/>}/>
      <Route path="*" element={<h1 style={{fontFamily: "sans-serif", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>Page Not Found 404</h1>}/>
    </Routes>
    // <>
    //   <Login />
    //   <Signup />
    //   <Dashboard />
    // </>
  )
}

export default App;