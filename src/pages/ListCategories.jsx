import axios from "axios";
import { useEffect, useState } from "react";
import Config from "../../config";
import MenuAdmin from "../componets/MenuAdmin";
import "../css/MenuAdmin.css";
import useListCategories from "../hook/useListCategories";
import { DeleteIcon, EditIcon } from "../componets/Icons";
import { Link } from "react-router-dom";
import api from "../interceptor/interceptor";
export default function ListCategorias() {
  const { categories, handleGetCategories } = useListCategories();

  const handleDeleteCategory = (id) => {
    api.delete(`${Config.BACKEND_URL}categories/delete/${id}`).then(() => {});
  };
  useEffect(() => {
    handleGetCategories();
  }, []);
  return (
    <div className="contenedorPrincipal">
      <MenuAdmin />
      <main className="panel">
        <div className="contenido">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>email</th>
                <th>controls</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => {
                return (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>
                      <button onClick={() => handleDeleteCategory(category.id)}>
                        <DeleteIcon />
                      </button>
                      <Link to={`/edit/categories/${category.id}`}>
                        <EditIcon />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
