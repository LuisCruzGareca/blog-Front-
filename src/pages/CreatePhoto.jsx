import Config from "../../config";
import { useState } from "react";
import { DeleteIcon } from "../componets/Icons";
import api from "../interceptor/interceptor";

export default function CreatePhoto({
  setPhotos,
  photos,
  componentIndex,
  photosComponent,
  setPhotoComponent,
}) {
  const [preview, setPreview] = useState([]);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  const handlePosPhoto = (event) => {
    let file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    api
      .post(Config.BACKEND_URL + "photo/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setPreview(res.data.photo);
        setPhotos((prev) => [...prev, res.data.filename]);
        setUploadedPhoto(res.data.filename);
      });
  };
  const handleDelete = () => {
    api
      .delete(`${Config.BACKEND_URL}photo/by-filename/${uploadedPhoto}`)
      .then((res) => {
        setPhotos(photos.filter((filename) => filename !== uploadedPhoto));
        setPhotoComponent(
          photosComponent.filter((_, index) => componentIndex !== index)
        );
        setPreview(null);
      });
  };
  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={preview} style={{ width: "100px" }} />
      <input type="file" onChange={handlePosPhoto} />

      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}
