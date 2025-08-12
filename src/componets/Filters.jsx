import { useEffect, useState } from "react";
import UseListPosts from "../hook/UseListPost";
import axios from "axios";
import Config from "../../config";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export default function Filters() {
  const { setSelectedCategory, setPage, setOrderBy } = useContext(PostContext);
  const [categories, setCategories] = useState([]);

  const handleWhithCategoriesPost = () => {
    axios
      .get(Config.BACKEND_URL + "categories/list/categorieWhithPosts")
      .then((res) => {
        setCategories(res.data);
      });
  };

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
    setPage(1);
  };

  useEffect(() => {
    handleWhithCategoriesPost();
  }, []);
  return (
    <div className="filtros">
      <select onChange={handleChangeCategory}>
        <option value="">Todas las categorias</option>
        {categories.map((category) => {
          return <option key={category.id}>{category.name}</option>;
        })}
      </select>

      <select
        onChange={(event) => {
          setOrderBy(event.target.value);
        }}
      >
        <option value="">Fecha de creación</option>

        <option value="createdAt">Más recientes</option>
      </select>
    </div>
  );
}
