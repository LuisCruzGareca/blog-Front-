import { useState } from "react";
import Config from "../../config";
import axios from "axios";

export default function UseListPosts() {
  const [posts, setPosts] = useState([]);

  const handleListPosts = () => {
    axios.get(Config.BACKEND_URL + "posts/list").then((response) => {
      setPosts(response.data);
    });
  };

  return { posts, handleListPosts };
}
