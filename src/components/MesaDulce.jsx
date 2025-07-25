import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MesaDulcePremium() {
  const opcionesDulces = [
    {
      nombre: "Isla Dulce",
      descripcion:
        "Pastafrola, ricota, frutal, budín de pan, tofi y copitos de coco, lemon pie, chocotorta, tiramisú, trufas, tarta, cheesecake.",
    },
    {
      nombre: "Isla Cascada de Chocolate",
      descripcion: "Frutas, galletitas y malvaviscos.",
    },
    {
      nombre: "Isla de Tentaciones Dulces",
      descripcion: "Variedad de shots.",
    },
    {
      nombre: "Café y Té",
      descripcion: "Café y variedades de té.",
    },
  ];

  const [seleccionados, setSeleccionados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dni = localStorage.getItem("dni");
    if (!dni) navigate("/Clientes");
  }, [navigate]);

  const toggleSeleccion = (nombre) => {
    setSeleccionados((prev) =>
      prev.includes(nombre)
        ? prev.filter((item) => item !== nombre)
        : [...prev, nombre]
    );
  };

  const guardarSeleccion = () => {
    localStorage.setItem(
      "mesaDulcePremium",
      seleccionados.length > 0 ? JSON.stringify(seleccionados) : null
    );
    console.log("Mesa dulce seleccionada:", seleccionados);
    console.log("DNI asociado:", localStorage.getItem("dni"));
  };

  const handleSiguiente = () => {
  guardarSeleccion(); // guardará "" si no se eligió nada
  navigate("/FinDeFiesta"); // Ajustá esta ruta a lo que siga en tu flujo
};

  const handleAtras = () => {
    guardarSeleccion();
    navigate("/postres"); // Ajustá esta ruta a la anterior sección
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h2>Mesa Dulce Premium (podés elegir varias)</h2>
      {opcionesDulces.map((opcion) => (
        <div key={opcion.nombre} style={{ marginBottom: "0.5rem" }}>
          <label>
            <input
              type="checkbox"
              value={opcion.nombre}
              checked={seleccionados.includes(opcion.nombre)}
              onChange={() => toggleSeleccion(opcion.nombre)}
            />
            <strong> {opcion.nombre}:</strong> {opcion.descripcion}
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

export default MesaDulcePremium;