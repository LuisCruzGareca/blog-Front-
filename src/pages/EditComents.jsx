import axios from "axios";
import Config from "../../config";
import { useState } from "react";

export default function EditComment({
  comentario,
  setComentarios,
  comentarios,
  postId,
}) {
  const [mostrarEdit, setMostrarEdit] = useState(false);

  const handleDeleteComentario = () => {
    axios
      .delete(Config.BACKEND_URL + `comment/delete/${comentario.id}`)
      .then((response) => {
        setComentarios(comentarios.filter((c) => c.id !== comentario.id));
        console.log("Comentario eliminado:", response.data);
      });
  };

  const handleEditComment = () => {
    axios
      .patch(Config.BACKEND_URL + `comment/update/${comentario.id}`, {
        comment: document.getElementById(`txtEdit`).value,
        postId: postId,
        authorId: 1,
      })
      .then((response) => {
        console.log("Comentario editado:", response.data);
      });
  };
  return (
    <div>
      <button onClick={handleDeleteComentario}>eliminar</button>
      <button onClick={() => setMostrarEdit(!mostrarEdit)}>Editar</button>

      {mostrarEdit && (
        <form onSubmit={handleEditComment}>
          <input type="text" id="txtEdit" defaultValue={comentario.comment} />
          <button type="submit">editar</button>
        </form>
      )}
    </div>
  );
}
