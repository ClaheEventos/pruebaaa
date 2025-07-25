import React, { useState } from "react";

function ShowEleccion() {
  const shows = [
    "Túnel 3D",
    "Saxofonista",
    "Zancos",
    "Mariachis",
    "Humorístico",
    "Transformista",
    "2 personajes para carioca",
    "Malabarista",
    "Lanza llamas",
    "Personajes",
    "Reportaje",
    "1 personaje (carioca)",
    "Parejas de baile",
    "Plataforma",
    "Show láser",
    "Mago",
  ];

  const [seleccionados, setSeleccionados] = useState([]);

  const toggleSeleccion = (item) => {
    if (seleccionados.includes(item)) {
      setSeleccionados(seleccionados.filter((i) => i !== item));
    } else {
      setSeleccionados([...seleccionados, item]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (seleccionados.length === 0) {
      alert("Por favor seleccioná al menos un show.");
      return;
    }
    console.log("Shows seleccionados:", seleccionados);
    alert("Elegiste:\n" + seleccionados.join("\n"));
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h2>Shows a elección</h2>
      <p>Podés seleccionar varios shows según tu evento.</p>
      <form onSubmit={handleSubmit}>
        {shows.map((show) => (
          <div key={show} style={{ marginBottom: "0.5rem" }}>
            <label>
              <input
                type="checkbox"
                value={show}
                checked={seleccionados.includes(show)}
                onChange={() => toggleSeleccion(show)}
              />
              {" "}{show}
            </label>
          </div>
        ))}
        <button type="submit" style={{ marginTop: "1rem", padding: "10px 20px" }}>
          Confirmar selección
        </button>
      </form>
    </div>
  );
}

export default ShowEleccion;