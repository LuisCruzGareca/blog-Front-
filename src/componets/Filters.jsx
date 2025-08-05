import { useEffect, useState } from "react";
import UseListPosts from "../hook/UseListPost";
import axios from "axios";
import Config from "../../config";

export default function Filters() {
  const [whithCategoriesPost, setWhithCategoriesPost] = useState([]);

  const handleWhithCategoriesPost = () => {
    axios
      .get(Config.BACKEND_URL + "categories/list/categorieWhithPosts")
      .then((res) => {
        setWhithCategoriesPost(res.data);
      });
  };
  useEffect(() => {
    handleWhithCategoriesPost();
  }, []);
  return (
    <div className="filtros">
      <select>
        <option value="">Todas las categorias</option>
        {whithCategoriesPost.map((categories) => {
          return <option key={categories.id}>{categories.name}</option>;
        })}
      </select>

      {/*
      <select>
        <option value="">Fecha de creación</option>
        <option value="recientes">Más recientes</option>
        <option value="antiguos">Más antiguos</option>
      </select> */}
    </div>
  );
}
