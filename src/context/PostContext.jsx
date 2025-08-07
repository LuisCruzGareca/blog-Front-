import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Config from "../../config";

export const PostContext = createContext();

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState();
  const [orderBy, setOrderBy] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const getPost = () => {
    let path = "search/posts/list/" + page;
    if (selectedCategory !== null) {
      path += `/${selectedCategory}`;
    }
    if (orderBy === null) {
      if (selectedCategory !== null) {
        path += "/all";
      }
      path += "/" + orderBy;
    }
    axios.get(Config.BACKEND_URL + path).then((res) => {
      setPosts(res.data.posts);
      setTotalPage(res.data.totalPages);
    });
  };
  useEffect(() => {
    getPost();
  }, [selectedCategory, page]);
  return (
    <PostContext.Provider
      value={{
        setSelectedCategory,
        setPage,
        posts,
        totalPages,
        page,
        setOrderBy,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
