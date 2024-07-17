import { Route, Routes } from "react-router-dom";
import "./App.css";
import Course from "./components/Course";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Course />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
