import axios from "axios";
import Header from "../componets/Header";
import Config from "../../config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RegisterUser() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(Config.BACKEND_URL + "user/create", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      })
      .then((response) => {
        //redirigir el usario
        navigate("/login");
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.message) {
          setError("Error al crear usuario");
        }
      });
  };
  return (
    <div className="login-container">
      <Header />
      <div className="mainForm">
        <main className="mainFormDiv">
          <form onSubmit={handleSubmit}>
            <h2>Crear Usuario</h2>
            <input type="text" placeholder="Username" id="name" />
            <input type="email" placeholder="Email" id="email" />
            <input type="password" placeholder="Password" id="password" />
            <button type="submit">Crear</button>
            <p>{error}</p>
          </form>
        </main>
      </div>
    </div>
  );
}
