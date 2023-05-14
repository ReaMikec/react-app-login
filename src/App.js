import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Reset from "./components/Reset";
import NewPass from "./components/NewPass";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/newpass" element={<NewPass />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
