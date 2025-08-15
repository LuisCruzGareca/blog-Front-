import axios from "axios";
import Header from "../componets/Header";
import Config from "../../config";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import Footer from "../componets/Footer";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../interceptor/interceptor";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const handleSubmitAuth = (e) => {
    e.preventDefault();

    api
      .post(Config.BACKEND_URL + "auth/login", {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      })
      .then((response) => {
        const token = response.data.access_token;
        localStorage.setItem("token", token); // Guarda el JWT
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Guarda el usuario
        setUser(response.data.user);

        navigate("/"); // redirige al home
      })
      .catch((err) => {
        if (err.response) {
          setError("Credenciales inválidas");
        }
      });
  };
  return (
    <div className="login-container">
      <Header />

      <main className="mainForm">
        <div className="mainFormDiv">
          <form onSubmit={handleSubmitAuth}>
            <h2>INICIAR SECION</h2>
            <input type="email" placeholder="Email" id="email" />
            <input type="password" placeholder="Password" id="password" />
            <p>{error}</p>

            <button type="submit" className="btnfuncional">
              Iniciar Sesión
            </button>
          </form>
          <Link
            to="/register/user"
            style={{
              marginTop: "10px",
              textAlign: "center",
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
            }}
          >
            Crear Usuario
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
