import { BrowserRouter, Route,Routes } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"


import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register" 
import Error404 from "./pages/Error404"
import Liked from "./pages/Liked"
import ViewNews from "./pages/ViewNews";
import CategoryPage from "./pages/CategoryPage";
import Create from "./pages/Create";
import CreatedNews from "./pages/CreatedNews";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Create" element={<Create/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Liked" element={<Liked/>}/>
        <Route path="/CreatedNews" element={<CreatedNews/>}/>
        <Route path="/category/:category" element={<CategoryPage/>}/>
        <Route path="*" element={<Error404/>}/>
        <Route path="/News/:title" element = {<ViewNews/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
