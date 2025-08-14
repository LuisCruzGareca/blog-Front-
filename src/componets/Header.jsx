import { useContext, useState } from "react";
import { POSTICO, Search, User } from "./Icons";
import { PostContext } from "../context/PostContext";
import axios from "axios";
import Config from "../../config";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const { setPosts, setTotalPage } = useContext(PostContext);
  const [word, setWord] = useState(false);
  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (word.trim() !== "") {
      axios.get(Config.BACKEND_URL + "search/posts/" + word).then((res) => {
        setPosts(res.data.posts);
        setTotalPage(res.data.totalPages);
      });
    }
  };
  return (
    <header>
      <POSTICO />
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
          <Link to="/login">
            <User />
          </Link>
        </button>
      </div>
    </header>
  );
}
