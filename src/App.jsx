import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./componets/Details";
import Home from "./pages/Home";
import RegisterUser from "./pages/RegisterUser";
import PostProvider from "./context/PostContext";
import UserProvider from "./context/UserContext";
import Login from "./pages/Login";
import PrivateRouter from "./componets/PrivateRoute";
import ListUser from "./pages/ListUser";
import ListCategorias from "./pages/ListCategories";
import ListPost from "./pages/ListPost";
import EditCategories from "./pages/EditCategories";
function App() {
  return (
    <PostProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRouter>
                  <Home />
                </PrivateRouter>
              }
            />

            <Route path="/detail/:id" element={<Details />} />
            <Route path="/register/user" element={<RegisterUser />} />
            <Route path="/login" element={<Login />} />

            {/* paginas admin */}
            <Route path="/user" element={<ListUser />} />
            <Route path="/edit/categories/:id" element={<EditCategories />} />
            <Route path="/categories" element={<ListCategorias />} />
            <Route path="/posts" element={<ListPost />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </PostProvider>
  );
}

export default App;
