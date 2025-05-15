import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import Login from "./containers/Login/Login";
import NewProduct from "./containers/NewProduct/NewProduct";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import Products from "./containers/Products/Products";
import Register from "./containers/Register/Register";
import { RootState, store } from "./store";

type ProtectedRouteProps = {
  isAllowed: boolean | null;
  redirectTo: string;
  children: ReactNode;
};

function App() {
  axios.interceptors.request.use(config => {
    try {
      config.headers["Authorization"] = store.getState().users?.user?.token;
    } catch (error: unknown) {
      console.log(error);
    }
    return config;
  });

  const user = useSelector((state: RootState) => state.users.user);

  const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAllowed, redirectTo, children }) => {
    return isAllowed ? <>{children}</> : <Navigate to={redirectTo} replace />;
  };

  return (
    <>
      <CssBaseline />
      <AppToolbar />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/new" element={<NewProduct />} />
          <Route
            path="/products/new"
            element={
              <ProtectedRoute isAllowed={user && user.role === "admin"} redirectTo="/">
                <NewProduct />
              </ProtectedRoute>
            }
          />

          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
