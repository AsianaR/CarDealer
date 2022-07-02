import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogPage } from "../pages/BlogPage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { PropertyPage } from "../pages/PropertyPage";
import { SignupPage } from "../pages/SignupPage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="signup" element={<SignupPage/>}/>

      <Route path="property" element={<PropertyPage/>}/>
      <Route path="blog" element={<BlogPage/>}/>

      <Route path=":productId" element={<ProductPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
