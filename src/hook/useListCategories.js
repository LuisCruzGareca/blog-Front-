import axios from "axios";
import { useState } from "react";
import Config from "../../config";

export default function useListCategories() {
  const [categories, setCategories] = useState([]);
  const handleGetCategories = () => {
    axios.get(Config.BACKEND_URL + "categories/list").then((response) => {
      setCategories(response.data);
    });
  };
  return { categories, handleGetCategories, setCategories };
}
