import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Clientes() {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Guardar en localStorage
      localStorage.setItem("nombre", nombre);
      localStorage.setItem("dni", dni);

      // Enviar a Google Apps Script
      await fetch("https://script.google.com/macros/s/AKfycbzTqava0pCGrexWh_n4NNbYMptPD1Xw1GlFM39KYar3XGHRB0CYJI1ciOZ4WHP6SG2tlQ/exec", {
        method: "POST",
        body: JSON.stringify({ nombre, dni }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert(`Cliente registrado:\nNombre: ${nombre}\nDNI: ${dni}`);

      // Ir al paso siguiente
      navigate("/Plan");
    } catch (error) {
      alert("Error al registrar el cliente. Verificá la conexión.");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Registrar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del cliente:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
          />
        </div>
        <div>
          <label>DNI:</label>
          <input
            type="number"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Clientes;
