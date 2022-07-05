import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "..";
import { BlogPage } from "../pages/BlogPage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { PropertyPage } from "../pages/PropertyPage";
import { SignupPage } from "../pages/SignupPage";
import { NotFound } from "../pages/404";
import { DashboardPage } from "../pages/DashboardPage";

import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  
  return (user === null)  ? (
    <Routes>

      <Route path="*" element={<NotFound/>} />
      <Route path="/" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />

    </Routes>
  ) : (
    <Routes>
      <Route path="*" element={<NotFound/>} />
      <Route path="/" element={<DashboardPage />} />

      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="property" element={<PropertyPage />} />
      <Route path="blog" element={<BlogPage />} />

      <Route path="vehicle/:productId" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
