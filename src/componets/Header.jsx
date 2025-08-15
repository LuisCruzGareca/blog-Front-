import { useContext, useState } from "react";
import { User } from "./Icons";
import { PostContext } from "../context/PostContext";
import Config from "../../config";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import { UserContext } from "../context/UserContext";
import api from "../interceptor/interceptor";

export default function Header() {
  const { setPosts, setTotalPage } = useContext(PostContext);
  const [word, setWord] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (word.trim() !== "") {
      api.get(Config.BACKEND_URL + "search/posts/" + word).then((res) => {
        setPosts(res.data.posts);
        setTotalPage(res.data.totalPages);
      });
    }
  };

  return (
    <header>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" />
        <span style={{ fontFamily: "fantasy", fontSize: "22px" }}>
          Blog Online
        </span>
      </div>
      <div className="search-container">
        <form action="" className="search-form" onSubmit={handleSubmitForm}>
          <input
            type="search"
            placeholder="Buscar..."
            className="search-input"
            onClick={() => {
              navigate("/");
            }}
            onChange={(event) => {
              setWord(event.target.value);
            }}
          />
          <button type="submit" className="btnSearch">
            Buscar
          </button>
        </form>

        <button id="searchButton">
          {user ? (
            <Link to="/">
              <p>{user.name}</p>
            </Link>
          ) : (
            <Link to="/login">
              <User />
            </Link>
          )}
        </button>
      </div>
    </header>
  );
}
