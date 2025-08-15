import { useState } from "react";
import Config from "../../config";
import api from "../interceptor/interceptor";

export default function useListCategories() {
  const [categories, setCategories] = useState([]);
  const handleGetCategories = () => {
    api.get(Config.BACKEND_URL + "categories/list").then((response) => {
      setCategories(response.data);
    });
  };
  return { categories, handleGetCategories, setCategories };
}
