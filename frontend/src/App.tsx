import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home";


export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}