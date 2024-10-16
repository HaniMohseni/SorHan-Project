// All the Routs

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Logout from "../pages/Logout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SearchBox from "./SearchBox";
import Profile from "../pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SearchBox" element={<SearchBox />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Logout" element={<Logout />} />

        {/* {user ? <Home/> : <Register/>} */}
      </Routes>
    </Router>
  );
}

export default App;
