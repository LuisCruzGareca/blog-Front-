import { useEffect } from "react";
import Config from "../../config";
import MenuAdmin from "../componets/MenuAdmin";
import "../css/MenuAdmin.css";
import UseListPosts from "../hook/useListPost";
import { DeleteIcon, EditIcon } from "../componets/Icons";
import { Link } from "react-router-dom";
import api from "../interceptor/interceptor";
export default function ListPost() {
  const { posts, handleListPosts } = UseListPosts();

  const handleDeletePost = (id) => {
    api.delete(`${Config.BACKEND_URL}posts/${id}`).then(() => {
      handleListPosts();
    });
  };
  useEffect(() => {
    handleListPosts();
  }, [posts]);
  return (
    <div className="contenedorPrincipal">
      <MenuAdmin />
      <main className="panel">
        <Link to="/create/posts " className="button">
          Create Products
        </Link>
        <div className="contenido">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>content</th>
                <th>accions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    <td>
                      <button onClick={() => handleDeletePost(post.id)}>
                        {/* <DeleteIcon /> */}
                      </button>
                      <Link to={`/edit/posts/${post.id}`}>
                        <EditIcon />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
