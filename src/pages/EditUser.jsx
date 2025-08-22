import { useEffect, useState } from "react";
import MenuAdmin from "../componets/MenuAdmin";
import "../css/MenuAdmin.css";
import Config from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import api from "../interceptor/interceptor";
export default function EditUser() {
  const navigate = useNavigate();
  const idUser = useParams().id;
  const [user, setUser] = useState({
    email: "",
  });
  useEffect(() => {
    api.get(Config.BACKEND_URL + `user/list/${idUser}`).then((response) => {
      setUser(response.data);
    });
  }, [idUser]);
  const handleInput = (event) => {
    setUser({ ...user, email: event.target.value });
  };
  const handleEditCategory = (event) => {
    event.preventDefault();
    api
      .patch(Config.BACKEND_URL + "user/edit/" + idUser, {
        email: user.email,
      })
      .then((response) => {
        navigate("/user");
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
              id="email"
              value={user.email}
              //   onBlur={handleName}
              onChange={handleInput}
            />

            <button type="submit">Editar</button>
          </form>
        </div>
      </main>
    </div>
  );
}
