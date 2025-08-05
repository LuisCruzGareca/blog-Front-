import { Comment, Like, Share } from "./Icons";
import postImg from "../img/imagenpos.jpg";
import Filters from "./Filters";
import { Link } from "react-router-dom";
import ListPosts from "../hook/UseListPost";
import { useEffect } from "react";

export default function Posts() {
  const { posts, handleListPosts } = ListPosts();

  useEffect(() => {
    handleListPosts();
  }, []);
  return (
    <div className="contenidoPosts">
      <Filters />
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="post-imagen">
              <img src={postImg} alt="Post" />
              <div className="acciones">
                <button title="Me gusta">
                  <Like />
                </button>
                <button title="Comentar">
                  <Comment />
                </button>
                <button title="Compartir">
                  <Share />
                </button>
              </div>
            </div>
            <div className="post-info">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <Link to={`/detail/${post.id}`}>Ver más</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
