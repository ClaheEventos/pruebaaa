import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function IslasPremium() {
  const [seleccionadas, setSeleccionadas] = useState([]);
  const navigate = useNavigate();

  const islasPremium = [
    { nombre: "Isla Campestre", descripcion: "Mini choripanes." },
    { nombre: "Isla Cheddar", descripcion: "Variedad de snacks." },
    { nombre: "Isla Japonesa", descripcion: "Variedad de sushi." },
    { nombre: "Isla de Mar", descripcion: "Arroz con calamar." },
    {
      nombre: "Isla Teen",
      descripcion: "Panchos, papas fritas, nuggets, aderezos.",
    },
    {
      nombre: "Isla de Pastas",
      descripcion: "Fettuccine, Penne Rigatoni y Pappardelle.",
    },
  ];

  useEffect(() => {
    const dni = localStorage.getItem("dni");
    if (!dni) navigate("/Clientes");
  }, [navigate]);

  const handleChange = (nombre) => {
    setSeleccionadas((prev) =>
      prev.includes(nombre)
        ? prev.filter((item) => item !== nombre)
        : [...prev, nombre]
    );
  };

  const guardarSeleccion = () => {
    localStorage.setItem(
      "islasPremium",
      seleccionadas.length > 0 ? JSON.stringify(seleccionadas) : null
    );
    console.log("Islas Premium seleccionadas:", seleccionadas);
    console.log("DNI asociado:", localStorage.getItem("dni"));
  };

  const handleSiguiente = () => {
    guardarSeleccion();
    navigate("/PlatoPrincipal"); // Ajustá esta ruta
  };

  const handleAtras = () => {
    guardarSeleccion();
    navigate("/PrimerPlato");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Islas Premium (podés elegir varias)</h2>

      {islasPremium.map((isla) => (
        <div key={isla.nombre} style={{ marginBottom: "1rem" }}>
          <label>
            <input
              type="checkbox"
              value={isla.nombre}
              checked={seleccionadas.includes(isla.nombre)}
              onChange={() => handleChange(isla.nombre)}
            />
            <strong> {isla.nombre}:</strong> {isla.descripcion}
          </label>
        </div>
      ))}

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <button onClick={handleAtras} style={{ padding: "10px 20px" }}>
          ⬅ Atrás
        </button>

        <button onClick={handleSiguiente} style={{ padding: "10px 20px" }}>
          Siguiente ➡
        </button>
      </div>
    </div>
  );
}

export default IslasPremium;