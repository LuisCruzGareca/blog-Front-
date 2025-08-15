import { useEffect, useState } from "react";
import MenuAdmin from "../componets/MenuAdmin";
import "../css/MenuAdmin.css";
import axios from "axios";
import Config from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import api from "../interceptor/interceptor";
export default function EditCategories() {
  const navigate = useNavigate();
  const idUser = useParams().id;
  const [categories, setCategories] = useState({
    name: "",
  });
  useEffect(() => {
    api
      .get(Config.BACKEND_URL + `categories/list/${idUser}`)
      .then((response) => {
        setCategories(response.data);
      });
  }, [idUser]);
  const handleInput = (event) => {
    setCategories({ ...categories, name: event.target.value });
  };
  const handleEditCategory = (event) => {
    event.preventDefault();
    api
      .patch(Config.BACKEND_URL + "categories/edit/" + idUser, {
        name: categories.name,
      })
      .then((response) => {
        navigate("/categories");
      });
  };

  return (
    <div className="contenedorPrincipal">
      <MenuAdmin />
      <main className="panel">
        <div className="form-container">
          <form onSubmit={handleEditCategory}>
            <h2>Editar Categoria</h2>
            <input
              type="text"
              id="name"
              value={categories.name}
              //   onBlur={handleName}
              onChange={handleInput}
            />

            <button type="submit">Editar</button>
            <p>
              {/* {error.map((e, index) => {
                return <label key={index}>{e}</label>;
              })} */}
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
