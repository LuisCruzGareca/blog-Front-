import { useState } from "react";
import { Facebook, ShareIcon, ShareIconBacio, Twiter, Watsap } from "./Icons";

export default function Share({ postId }) {
  const [mostrarShare, setMostrarShare] = useState(false);
  const handleShareFacebook = () => {
    const url = encodeURIComponent("https://tuapp.com/post/" + postId);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent("Mira este post interesante");
    const url = encodeURIComponent("https://tuapp.com/post/" + postId);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      "Mira este post interesante https://tuapp.com/post/" + postId
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };
  return (
    <div>
      <a onClick={() => setMostrarShare(!mostrarShare)}>
        {mostrarShare ? <ShareIconBacio /> : <ShareIcon />}
      </a>
      {mostrarShare && (
        <>
          <h3>COMPARTIR EN</h3>
          <a onClick={handleShareFacebook} style={{ cursor: "pointer" }}>
            <Facebook />
          </a>
          <a onClick={handleShareTwitter} style={{ cursor: "pointer" }}>
            <Twiter />
          </a>
          <a onClick={handleShareWhatsApp} style={{ cursor: "pointer" }}>
            <Watsap />
          </a>
        </>
      )}
    </div>
  );
}
