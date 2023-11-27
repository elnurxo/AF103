import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import CategoryDetail from "./pages/CategoryDetail";
import NotFound from "./pages/NotFound";
import CategoryList from "./pages/CategoryList";
import AddCategory from "./pages/AddCategory";
import Login from "./pages/Login";


function App() {
 
  return (
   <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/category">
          <Route index element={<CategoryList/>}/>
          <Route path=":id" element={<CategoryDetail/>}/>
          <Route path="add" element={<AddCategory/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
   </>
  )
}

export default App
