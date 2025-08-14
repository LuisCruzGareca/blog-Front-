import { useState } from "react";
import MenuAdmin from "../componets/MenuAdmin";
import "../css/MenuAdmin.css";
import axios from "axios";
import Config from "../../config";
import { useNavigate } from "react-router-dom";
export default function EditCategories() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState({});

  const handleInput = (event) => {
    setCategories(event.target.value);
  };
  const handleEditCategory = (event) => {
    event.preventDefault();
    axios
      .patch(Config.BACKEND_URL + "categories/edit/" + 5, {
        name: categories.name,
      })
      .then((response) => {
        setCategories(response.data || "");
        navigate("/categories");
      });
  };
  console.log(categories);
  return (
    <div className="contenedorPrincipal">
      <MenuAdmin />
      <main className="panel">
        <div className="form-container">
          <form onSubmit={handleEditCategory}>
            <h2>Editar Usuario</h2>
            <input
              type="email"
              id="email"
              value={categories.email}
              //   onBlur={handleName}
              onChange={handleInput}
              placeholder="Email"
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
