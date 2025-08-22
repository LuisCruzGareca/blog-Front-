import { useContext, useEffect, useState } from "react";
import { Like, LikeBacio } from "./Icons";
import Config from "../../config";
import api from "../interceptor/interceptor";
import { UserContext } from "../context/UserContext";

export default function Likes({ idPost }) {
  const token = localStorage.getItem("token");
  const { user } = useContext(UserContext);
  const userId = user?.id;
  const [userLiked, setUserLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);

  const getCountLikes = () => {
    api.get(Config.BACKEND_URL + "likes/post/" + Number(idPost)).then((res) => {
      setLikedCount(res.data);
    });
  };

  const checkUserLike = () => {
    api.get(Config.BACKEND_URL + "likes/user/" + idPost, {}).then((res) => {
      setUserLiked(res.data.likedByUser);
    });
  };

  useEffect(() => {
    getCountLikes();
    if (token) checkUserLike();
  }, [idPost, userId]);

  const toggleLike = () => {
    api
      .post(`${Config.BACKEND_URL}likes/${idPost}`)

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
