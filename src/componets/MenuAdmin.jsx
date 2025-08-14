import { Link } from "react-router-dom";

export default function MenuAdmin() {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/user">Usuarios</Link>
          <Link to="/categories">Categorias</Link>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </aside>
  );
}
