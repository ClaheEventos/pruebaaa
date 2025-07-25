import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FinDeFiesta() {
  const [seleccion, setSeleccion] = useState("");
  const navigate = useNavigate();

  const opciones = [
    "Café con medialunas de manteca",
    "Festival de pizzas",
    "Tostados de JyQ con jugo de naranja",
    "Súper panchos con papas pay",
    "Desayuno criollo: tortafritas con mate cocido",
  ];

  useEffect(() => {
    const dni = localStorage.getItem("dni");
    if (!dni) navigate("/Clientes");
  }, [navigate]);

  const guardarSeleccion = () => {
    localStorage.setItem("finDeFiesta", seleccion || "");
    console.log("Fin de fiesta seleccionado:", seleccion);
    console.log("DNI asociado:", localStorage.getItem("dni"));
  };

const handleSiguiente = () => {
  guardarSeleccion(); // guardará "" si no se eligió nada
  navigate("/ExtrasLeciocion"); // Ajustá esta ruta a lo que siga en tu flujo
};

  const handleAtras = () => {
    guardarSeleccion();
    navigate("/mesaDulce"); // Ajustá esta ruta a la sección anterior
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Fin de fiesta (1 a elección)</h2>

      {opciones.map((opcion) => (
        <div key={opcion} style={{ marginBottom: "1rem" }}>
          <label>
            <input
              type="radio"
              name="finFiesta"
              value={opcion}
              checked={seleccion === opcion}
              onChange={() => setSeleccion(opcion)}
            />
            {" "}{opcion}
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

export default FinDeFiesta