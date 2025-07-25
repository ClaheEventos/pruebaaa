import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ExtrasLeciocion() {
  const extras = [
    "Stand de golosinas (6 variedades de gomitas, 2 variedades de chicles, caramelos)",
    "Pochoclos y copos de azúcar",
    "Arco de globos",
    "2 chispas frías",
    "Plataforma 360",
    "Stand glitter",
    "Stand de tatuajes",
    "Torta",
    "Shimer",
    "Book + libro de firmas",
    "Banner personalizado",
    "Video cronológico",
    "Peinado + maquillaje",
    "4 letras luminosas",
    "Cotillón flúor",
    "Espejo mágico",
    "15 rosas",
    "Fotografía",
    "Robot led",
    "Barra de jugos frutales",
    "Capa led (carioca)",
    "Lanza papelitos",
    "Ambientación mesa candy",
    "Reportaje (1 hora)",
  ];

  const [seleccionados, setSeleccionados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dni = localStorage.getItem("dni");
    if (!dni) navigate("/Clientes");
  }, [navigate]);

  const toggleSeleccion = (item) => {
    if (seleccionados.includes(item)) {
      setSeleccionados(seleccionados.filter((i) => i !== item));
    } else {
      setSeleccionados([...seleccionados, item]);
    }
  };

  const guardarSeleccion = () => {
    localStorage.setItem(
      "extrasSeleccionados",
      seleccionados.length > 0 ? JSON.stringify(seleccionados) : ""
    );
    console.log("Extras seleccionados:", seleccionados);
    console.log("DNI asociado:", localStorage.getItem("dni"));
  };

  const handleSiguiente = () => {
    guardarSeleccion();
    navigate("/ShowElecion");
  };

  const handleAtras = () => {
    guardarSeleccion();
    navigate("/FinDeFiesta");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h2>Extras a elección (sin límite)</h2>
      <p>Total seleccionados: {seleccionados.length}</p>

      {extras.map((extra) => (
        <div key={extra} style={{ marginBottom: "0.5rem" }}>
          <label>
            <input
              type="checkbox"
              value={extra}
              checked={seleccionados.includes(extra)}
              onChange={() => toggleSeleccion(extra)}
            />
            {" "}{extra}
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

export default ExtrasLeciocion;