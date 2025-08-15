import { useEffect, useState } from "react";
import MenuAdmin from "../componets/MenuAdmin";
import "../css/MenuAdmin.css";
import Config from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import api from "../interceptor/interceptor";
export default function EditPost() {
  const navigate = useNavigate();
  const idPost = useParams().id;
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  useEffect(() => {
    api.get(Config.BACKEND_URL + `posts/list/${idPost}`).then((response) => {
      setPost(response.data);
    });
  }, [idPost]);
  const handleInputTitle = (event) => {
    setPost({ ...post, title: event.target.value });
  };
  const handleInputContent = (event) => {
    setPost({ ...post, content: event.target.value });
  };
  const handleEditCategory = (event) => {
    event.preventDefault();
    api
      .patch(Config.BACKEND_URL + "posts/edit/" + idPost, {
        title: post.title,
        content: post.content,
      })
      .then((response) => {
        navigate("/posts");
      });
  };
  return (
    <div className="contenedorPrincipal">
      <MenuAdmin />
      <main className="panel">
        <div className="form-container">
          <form onSubmit={handleEditCategory}>
            <h2>Editar User</h2>
            <input
              type="text"
              id="title"
              value={post.title}
              onChange={handleInputTitle}
            />
            <textarea
              id="content"
              value={post.content}
              onChange={handleInputContent}
            />

            <button type="submit">Editar</button>
          </form>
        </div>
      </main>
    </div>
  );
}
