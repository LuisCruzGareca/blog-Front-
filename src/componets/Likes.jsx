import { useEffect, useState } from "react";
import { Like, LikeBacio } from "./Icons";
import axios from "axios";
import Config from "../../config";

export default function Likes({ idPost }) {
  const userId = 1;
  const [userLiked, setUserLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);

  const getCountLikes = () => {
    axios.get(Config.BACKEND_URL + "likes/" + Number(idPost)).then((res) => {
      setLikedCount(res.data);
    });
  };

  const checkUserLike = () => {
    axios
      .get(`${Config.BACKEND_URL}likes/${idPost}/user/${userId}`)
      .then((res) => {
        setUserLiked(res.data.likedByUser);
      });
  };

  useEffect(() => {
    getCountLikes();
    checkUserLike();
  }, [idPost, userId]);
  const toggleLike = () => {
    axios
      .post(Config.BACKEND_URL + "likes", { userId, postId: Number(idPost) })
      .then((resp) => {
        if (resp.data.message === "Like agregado") {
          setUserLiked(true);
          setLikedCount(likedCount + 1);
        } else if (resp.data.message === "Like eliminado") {
          setUserLiked(false);
          setLikedCount(likedCount - 1);
        }
      });
  };
  return <a onClick={toggleLike}>{userLiked ? <Like /> : <LikeBacio />}</a>;
}
