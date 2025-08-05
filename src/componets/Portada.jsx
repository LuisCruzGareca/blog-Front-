import image from "../img/images.jpg";
export default function Portada() {
  return (
    <div className="portada">
      <img src={image} alt="Portada" />
      <div className="texto-portada">
        Explora las mejores publicaciones aquí
      </div>
    </div>
  );
}
