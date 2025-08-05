import { POSTICO, Search, User } from "./Icons";

export default function Header() {
  return (
    <header>
      <POSTICO />
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar publicaciones..."
          id="searchInput"
        />
        <button id="searchButton">
          <Search />
        </button>
        <button id="searchButton">
          <User />
        </button>
      </div>
    </header>
  );
}
