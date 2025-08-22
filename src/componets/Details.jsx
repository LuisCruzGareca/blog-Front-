import "../css/detail.css";
import "../css/comentarios.css";
import { useEffect, useState } from "react";
import Config from "../../config";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import Header from "./Header";
import Footer from "./Footer";
import PostProvider from "../context/PostContext";
import Likes from "./Likes";
import Share from "./Share";
import api from "../interceptor/interceptor";
export default function Details() {
  const idPost = useParams().id;
  const [postOne, setPostOne] = useState([]);

  const handleOnePost = () => {
    api.get(Config.BACKEND_URL + `posts/list/${idPost}`).then((response) => {
      setPostOne(response.data);
    });
  };

  useEffect(() => {
    handleOnePost();
  }, []);
  const volverAtras = () => {
    window.history.back();
  };
  return (
    <>
      <PostProvider>
        <Header />
      </PostProvider>
      <div className="container">
        <div className="detalle-post">
          <div className="imagen-principal">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Imagen del post"
            />
          </div>

          <div className="contenido">
            <p className="fecha">🕒 {postOne.createdAt}</p>
            <h1>{postOne.title}</h1>
            <p>{postOne.content}</p>
          </div>
          <div className="commentComplete">
            <Likes idPost={idPost} />
            <Comment idPost={idPost} />
            <Share idPost={idPost} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <a onClick={volverAtras} className="volver">
          Volver
        </a>
      </div>
      <Footer />
    </>
  );
}
