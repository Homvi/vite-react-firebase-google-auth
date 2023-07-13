import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Protected from "./Pages/Protected";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
