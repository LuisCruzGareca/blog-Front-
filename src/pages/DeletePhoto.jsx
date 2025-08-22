import Config from "../../config";
import api from "../interceptor/interceptor";

export default function DeletePhoto({ id, path, photos, setPhotos }) {
  const handleDeletePhotos = () => {
    api.delete(Config.BACKEND_URL + "photo/" + id).then(() => {
      const updatedPhotos = photos.filter((photo) => photo.id !== id);
      setPhotos(updatedPhotos);
    });
  };
  return (
    <div>
      <img src={Config.PHOTOS_URL + path} alt="" style={{ width: "200px" }} />
      <button onClick={handleDeletePhotos}>
        <DeleteIcon />
      </button>
    </div>
  );
}
