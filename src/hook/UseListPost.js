import { useState } from "react";
import Config from "../../config";
import api from "../interceptor/interceptor";

export default function UseListPosts() {
  const [posts, setPosts] = useState([]);

  const handleListPosts = () => {
    api.get(Config.BACKEND_URL + "posts/list").then((response) => {
      setPosts(response.data);
    });
  };

  return { posts, handleListPosts };
}
