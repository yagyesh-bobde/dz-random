import { FaArrowRightLong } from "react-icons/fa6";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Enter from "./pages/Enter";
import { Result } from "postcss";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form/enter/:type" element={<Enter />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
