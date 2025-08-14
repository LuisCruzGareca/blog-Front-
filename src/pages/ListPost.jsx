import axios from "axios";
import { useEffect } from "react";
import Config from "../../config";
import MenuAdmin from "../componets/MenuAdmin";
import "../css/MenuAdmin.css";
import UseListPosts from "../hook/UseListPost";
import { DeleteIcon, EditIcon } from "../componets/Icons";
export default function ListPost() {
  const { posts, handleListPosts } = UseListPosts();

  const handleDeletePost = (id) => {
    axios.delete(`${Config.BACKEND_URL}posts/${id}`).then(() => {
      handleListPosts();
    });
  };
  useEffect(() => {
    handleListPosts();
  }, []);
  return (
    <div className="contenedorPrincipal">
      <MenuAdmin />
      <main className="panel">
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
                        <DeleteIcon />
                      </button>
                      <button>
                        <EditIcon />
                      </button>
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
