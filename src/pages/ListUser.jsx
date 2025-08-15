import axios from "axios";
import MenuAdmin from "../componets/MenuAdmin";
import "../css/MenuAdmin.css";
import Config from "../../config";
import { useEffect } from "react";
import useListUser from "../hook/useListUser";
import { DeleteIcon, EditIcon } from "../componets/Icons";
import { Link } from "react-router-dom";
import api from "../interceptor/interceptor";
export default function ListUser() {
  const { user, handleGetuser } = useListUser();

  const handleDeleteUser = (id) => {
    api.delete(`${Config.BACKEND_URL}user/${id}`).then(() => {
      handleGetuser();
    });
  };
  useEffect(() => {
    handleGetuser();
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
                <th>email</th>
                <th>accions</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={() => handleDeleteUser(user.id)}>
                        <DeleteIcon />
                      </button>
                      <Link to={`/edit/user/${user.id}`}>
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
