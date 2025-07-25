import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Postres() {
  const [seleccionados, setSeleccionados] = useState([]);
  const navigate = useNavigate();

  const postres = [
    { nombre: "Copa helada", descripcion: "Helado artesanal con toppings." },
    { nombre: "Coctel de frutas", descripcion: "Frutas frescas de estación." },
    { nombre: "Flan con crema o dulce de leche", descripcion: "Clásico flan casero." },
    { nombre: "Brownie con helado", descripcion: "Brownie tibio con bocha de helado." },
    { nombre: "Durazno con crema", descripcion: "Duraznos en almíbar y crema." },
  ];

  useEffect(() => {
    const dni = localStorage.getItem("dni");
    if (!dni) navigate("/Clientes");
  }, [navigate]);

  const handleChange = (nombre) => {
    if (seleccionados.includes(nombre)) {
      setSeleccionados(seleccionados.filter((item) => item !== nombre));
    } else {
      if (seleccionados.length < 3) {
        setSeleccionados([...seleccionados, nombre]);
      } else {
        alert("Solo podés seleccionar hasta 3 postres.");
      }
    }
  };

  const guardarSeleccion = () => {
    localStorage.setItem(
      "postres",
      seleccionados.length > 0 ? JSON.stringify(seleccionados) : null
    );
    console.log("Postres seleccionados:", seleccionados);
    console.log("DNI asociado:", localStorage.getItem("dni"));
  };

  const handleSiguiente = () => {
    if (seleccionados.length === 0) {
      alert("Por favor, seleccioná al menos un postre.");
      return;
    }
    guardarSeleccion();
    navigate("/mesadulce"); // Cambiar según tu ruta real
  };

  const handleAtras = () => {
    guardarSeleccion();
    navigate("/PlatoPrincipal"); // Cambiar según tu ruta anterior
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Postres (hasta 3 a elección)</h2>

      {postres.map((postre) => (
        <div key={postre.nombre} style={{ marginBottom: "1rem" }}>
          <label>
            <input
              type="checkbox"
              value={postre.nombre}
              checked={seleccionados.includes(postre.nombre)}
              onChange={() => handleChange(postre.nombre)}
            />
            <strong> {postre.nombre}:</strong> {postre.descripcion}
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

export default Postres;