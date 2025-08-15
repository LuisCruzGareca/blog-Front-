import { useEffect, useState } from "react";
import Config from "../../config";
import { Comments, CommentsBacio } from "./Icons";
import EditComment from "../pages/EditComents";
import api from "../interceptor/interceptor";

export default function Comment({ idPost }) {
  const userID = 1;
  const [comentarios, setComentarios] = useState([]);
  const [mostrar, setMostrar] = useState(false);
  const hanleGetComentario = () => {
    api.get(Config.BACKEND_URL + `comment/list`).then((response) => {
      setComentarios(response.data);
    });
  };

  const handleCreateComentario = (event) => {
    event.preventDefault();

    api
      .post(Config.BACKEND_URL + `comment/create`, {
        comment: document.getElementById("txtComentario").value,
        postId: idPost,
        authorId: userID,
      })
      .then((response) => {
        setComentarios([...comentarios, response.data]);
      });
  };
  useEffect(() => {
    hanleGetComentario();
  }, []);
  return (
    <div>
      <a onClick={() => setMostrar(!mostrar)}>
        {mostrar ? <CommentsBacio /> : <Comments />}
      </a>
      <div>
        {mostrar && (
          <div className="comentarios-container">
            <h2>Comentarios</h2>
            {comentarios.map((comentario) => (
              <div key={comentario.id} className="comentario">
                <p className="autor">👤 {comentario.comment}</p>
                <EditComment
                  key={comentario.id}
                  comentario={comentario}
                  setComentarios={setComentarios}
                  comentarios={comentarios}
                  postId={idPost}
                />
              </div>
            ))}

            <form onSubmit={handleCreateComentario}>
              <input
                type="text"
                id="txtComentario"
                placeholder="Escribe tu comentario..."
              />
              <button type="submit">Crear</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
