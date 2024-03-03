import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login/Login.";
import Signup from "./singup/Singup";
import { ThemeProvider, createTheme } from "@mui/material";
import ProductsContainer from "./products/ProductsContainer";
import { AuthContextProvider } from "../common/AuthContext";
import ProductDetail from "./productDetail/ProductDetail";
import Order from "./order/Order";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

function App() {
  return (
    <AuthContextProvider>
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/order" element={<Order />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route exact path="/products" element={<ProductsContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </AuthContextProvider>
);
}

export default App;