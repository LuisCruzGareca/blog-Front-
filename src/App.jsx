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
import EditUser from "./pages/EditUser";
import EditPost from "./pages/EditPost";
import CreatePost from "./pages/CreatePost";
import CreatePhoto from "./pages/CreatePhoto";
function App() {
  return (
    <PostProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/detail/:id"
              element={
                <PrivateRouter>
                  <Details />
                </PrivateRouter>
              }
            />
            <Route
              path="/register/user"
              element={
                <PrivateRouter>
                  <RegisterUser />
                </PrivateRouter>
              }
            />
            <Route path="/login" element={<Login />} />

            {/* paginas admin */}
            <Route path="/user" element={<ListUser />} />
            <Route path="/edit/user/:id" element={<EditUser />} />

            <Route path="/edit/categories/:id" element={<EditCategories />} />
            <Route path="/categories" element={<ListCategorias />} />

            <Route path="/posts" element={<ListPost />} />
            <Route path="/create/posts" element={<CreatePost />} />
            <Route path="/edit/posts/:id" element={<EditPost />} />

            <Route path="/photo" element={<CreatePhoto />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </PostProvider>
  );
}

export default App;
