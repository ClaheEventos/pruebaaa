import React, { useState } from "react";

function PlatoInfantil() {
  const [seleccion, setSeleccion] = useState("");

  const platosInfantiles = [
    { nombre: "Milanesa con papas fritas/puré" },
    { nombre: "Cheeseburger con papas fritas" },
    { nombre: "Medallón de pollo crispy con papas fritas" },
    { nombre: "Nuggets con papas fritas" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!seleccion) {
      alert("Por favor seleccioná un plato infantil.");
      return;
    }

    console.log("Plato infantil seleccionado:", seleccion);
    alert("Elegiste: " + seleccion);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Plato Infantil (1 a elección)</h2>
      <form onSubmit={handleSubmit}>
        {platosInfantiles.map((plato) => (
          <div key={plato.nombre} style={{ marginBottom: "1rem" }}>
            <label>
              <input
                type="radio"
                name="platoInfantil"
                value={plato.nombre}
                checked={seleccion === plato.nombre}
                onChange={() => setSeleccion(plato.nombre)}
              />
              {plato.nombre}
            </label>
          </div>
        ))}

        <button type="submit" style={{ padding: "10px 20px" }}>
          Confirmar elección
        </button>
      </form>
    </div>
  );
}

export default PlatoInfantil;