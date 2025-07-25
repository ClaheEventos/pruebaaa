import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrimerPlato() {
  const [seleccionadas, setSeleccionadas] = useState([]);
  const navigate = useNavigate();

  const islas = [
    {
      nombre: "Isla Italiana",
      descripcion: "Pizza party con 8 variedades de pizza artesanal",
    },
    {
      nombre: "Isla Criolla",
      descripcion: "Pernil fogoneado con salsas criolla y chimichurri",
    },
    {
      nombre: "Isla Mexicana",
      descripcion:
        "Tacos de pollo, carne y verdura con fajitas y nachos. Salsa mexicana y crema agria",
    },
  ];

  useEffect(() => {
    const dni = localStorage.getItem("dni");
    const plan = localStorage.getItem("plan");

    if (!dni) {
      navigate("/Clientes"); // Redirige si no hay DNI
    } else {
      console.log("DNI asociado:", dni);
    }

    if (plan) {
      console.log("Plan seleccionado:", plan);
    }
  }, [navigate]);

  const handleChange = (nombreIsla) => {
    setSeleccionadas((prev) =>
      prev.includes(nombreIsla)
        ? prev.filter((item) => item !== nombreIsla)
        : [...prev, nombreIsla]
    );
  };

  const guardarSeleccion = () => {
    localStorage.setItem(
      "islas",
      seleccionadas.length > 0 ? JSON.stringify(seleccionadas) : null
    );
  };

  const handleSiguiente = () => {
    guardarSeleccion();
    navigate("/IslasPremiun"); // Cambia esta ruta según tu app
  };

  const handleAtras = () => {
    navigate("/Plan");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Primer Plato: Show de Islas (incluye las 3)</h2>
      {islas.map((isla) => (
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

export default PrimerPlato;
