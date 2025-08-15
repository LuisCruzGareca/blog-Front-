import { useEffect, useState } from "react";
import MenuAdmin from "../componets/MenuAdmin";
import "../css/MenuAdmin.css";
import axios from "axios";
import Config from "../../config";
import { useNavigate, useParams } from "react-router-dom";
export default function EditUser() {
  const navigate = useNavigate();
  const idUser = useParams().id;
  const [user, setUser] = useState({
    email: "",
  });
  useEffect(() => {
    axios.get(Config.BACKEND_URL + `user/list/${idUser}`).then((response) => {
      setUser(response.data);
    });
  }, [idUser]);
  const handleInput = (event) => {
    setUser({ ...user, email: event.target.value });
  };
  const handleEditCategory = (event) => {
    event.preventDefault();
    axios
      .patch(Config.BACKEND_URL + "user/edit/" + idUser, {
        email: user.email,
      })
      .then((response) => {
        navigate("/user");
      });
  };
  console.log(user);
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
