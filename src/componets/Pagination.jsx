import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export default function Pagination() {
  const { page, setPage, totalPages } = useContext(PostContext);
  const handleNext = () => {
    if (page < totalPages) {
      setPage((pageOne) => pageOne + 1);
    }
  };
  const hanldeBack = () => {
    if (page > 1) {
      setPage((onepage) => onepage - 1);
    }
  };
  return (
    <div className="containerBtn">
      {page > 1 && (
        <button
          onClick={() => {
            hanldeBack();
          }}
          className="btnPage"
        >
          atras
        </button>
      )}
      <span>
        {page} a {totalPages}
      </span>
      {page < totalPages && (
        <button
          onClick={() => {
            handleNext();
          }}
          className="btnPage"
        >
          siguiente
        </button>
      )}
    </div>
  );
}
