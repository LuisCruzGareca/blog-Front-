import { useEffect, useState } from "react";
import Config from "../../config";
import MenuAdmin from "../componets/MenuAdmin";
import api from "../interceptor/interceptor";
import CreatePhoto from "./CreatePhoto";
import useListCategories from "../hook/useListCategories";
import { MasIcon } from "../componets/Icons";
import "../css/photo.css";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

export default function CreatePost() {
  //   const { user } = useContext(UserContext);
  const userId = 1;
  const [photos, setPhotos] = useState([]);
  const [photosComponent, setPhotoComponent] = useState([]);
  const { categories, handleGetCategories } = useListCategories();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const handleInputTitle = (event) => {
    setPost({ ...post, title: event.target.value });
  };
  const handleInputContent = (value) => {
    setPost({ ...post, content: value });
  };
  const handleCreatePost = (event) => {
    event.preventDefault();
    console.log("Fotos que se enviarán:", photos);
    api.post(Config.BACKEND_URL + "posts/create", {
      title: post.title,
      content: post.content,
      authorId: userId,
      categories: selectedCategories,
      photos: photos,
    });
  };
  const handlePhotoComponent = () => {
    let photoTotal = photosComponent.length;
    const newPhotoComponent = [
      ...photosComponent,
      <CreatePhoto
        key={photoTotal + 1}
        setPhotos={setPhotos}
        photos={photos}
        componentIndex={photoTotal + 1}
        setPhotoComponent={setPhotoComponent}
        photosComponent={photosComponent}
      />,
    ];
    setPhotoComponent(newPhotoComponent);
  };
  let chkCategories = document.getElementsByName("categories");
  let selectedCategories = [];
  chkCategories.forEach((category) => {
    if (category.checked) {
      selectedCategories.push(category.value);
    }
  });
  //llamando al post para mostrar por defecto

  useEffect(() => {
    handleGetCategories();
  }, []);
  return (
    <div className="contenedorPrincipal">
      <MenuAdmin />
      <main className="panel">
        <div className="form-container">
          <form onSubmit={handleCreatePost}>
            <h2>Crear Post</h2>
            <input
              type="text"
              id="title"
              value={post.title}
              onChange={handleInputTitle}
              placeholder="Título del post"
            />
            <ReactQuill value={post.content} onChange={handleInputContent} />
            <div className="form-group">
              <h2>Categories</h2>
              <ul className="columns">
                {categories.map((category) => {
                  return (
                    <li key={category.id}>
                      <input
                        type="checkbox"
                        name="categories"
                        value={category.id}
                      />
                      <label> {category.name}</label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button type="submit">crear Post</button>
          </form>
          <div className="photo-container">
            <h2>Crear photo</h2>
            <button onClick={handlePhotoComponent}>
              <MasIcon />
            </button>
          </div>
          {photosComponent.map((component) => {
            return component;
          })}
        </div>
      </main>
    </div>
  );
}
