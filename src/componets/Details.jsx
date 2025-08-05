import "../css/detail.css";
import { useEffect, useState } from "react";
import UseListPosts from "../hook/UseListPost";
import axios from "axios";
import Config from "../../config";
import { useParams } from "react-router-dom";
export default function Details() {
  const id = useParams().id;
  const [postOne, setPostOne] = useState([]);
  const handleOnePost = () => {
    axios.get(Config.BACKEND_URL + `posts/list/${id}`).then((response) => {
      setPostOne(response.data);
    });
  };
  useEffect(() => {
    handleOnePost();
  }, []);
  const volverAtras = () => {
    window.history.back();
  };
  console.log(postOne);
  return (
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

          <a onClick={volverAtras} className="volver">
            Volver
          </a>
        </div>
      </div>
    </div>
  );
}
