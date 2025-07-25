import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PlatosCombinados() {
  const [platoPrincipal, setPlatoPrincipal] = useState("");
  const [platoInfantil, setPlatoInfantil] = useState("");
  const [notas, setNotas] = useState("");
  const navigate = useNavigate();

  const platosPrincipales = [
    {
      nombre: "Milanesa napolitana",
      descripcion: "Ternera o pollo con ensalada rusa, papas españolas, rústicas o arroz primavera.",
    },
    {
      nombre: "Pollo al verdeo",
      descripcion: "Con papas españolas o rústicas.",
    },
    {
      nombre: "Pastas",
      descripcion: "Ñoquis, ravioles, fideos caseros con salsas.",
    },
    {
      nombre: "Carré de cerdo o bondiola",
      descripcion: "Con puré de batata, papa, calabaza o mixto.",
    },
    {
      nombre: "Corte de ternera",
      descripcion: "Con papas españolas/rústicas o arroz primavera.",
    },
  ];

  const platosInfantiles = [
    { nombre: "Milanesa con papas fritas/puré" },
    { nombre: "Cheeseburger con papas fritas" },
    { nombre: "Medallón de pollo crispy con papas fritas" },
    { nombre: "Nuggets con papas fritas" },
  ];

  useEffect(() => {
    const dni = localStorage.getItem("dni");
    if (!dni) navigate("/Clientes");
  }, [navigate]);

  const handleGuardarYContinuar = () => {
    if (!platoPrincipal && !platoInfantil && !notas.trim()) {
      alert("Seleccioná al menos un plato o escribí una aclaración.");
      return;
    }

    if (platoPrincipal)
      localStorage.setItem("platoPrincipal", platoPrincipal);
    if (platoInfantil)
      localStorage.setItem("platoInfantil", platoInfantil);
    if (notas.trim())
      localStorage.setItem("notasAlimentarias", notas.trim());

    console.log("Datos guardados:");
    console.log({ platoPrincipal, platoInfantil, notas });

    navigate("/Postres"); // Cambiá esta ruta según el paso siguiente
  };

  const handleAtras = () => {
    navigate("/IslasPremiun"); // Cambiá esta ruta según el paso anterior
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h2>🍽️ Plato Principal (1 a elección)</h2>
      {platosPrincipales.map((plato) => (
        <div key={plato.nombre} style={{ marginBottom: "1rem" }}>
          <label>
            <input
              type="radio"
              name="platoPrincipal"
              value={plato.nombre}
              checked={platoPrincipal === plato.nombre}
              onChange={() => setPlatoPrincipal(plato.nombre)}
            />
            <strong> {plato.nombre}:</strong> {plato.descripcion}
          </label>
        </div>
      ))}

      <hr style={{ margin: "2rem 0" }} />

      <h2>👶 Plato Infantil (1 a elección)</h2>
      {platosInfantiles.map((plato) => (
        <div key={plato.nombre} style={{ marginBottom: "1rem" }}>
          <label>
            <input
              type="radio"
              name="platoInfantil"
              value={plato.nombre}
              checked={platoInfantil === plato.nombre}
              onChange={() => setPlatoInfantil(plato.nombre)}
            />
            {plato.nombre}
          </label>
        </div>
      ))}

      <hr style={{ margin: "2rem 0" }} />

      <h2>📝 Aclaraciones alimentarias</h2>
      <textarea
        placeholder="Ej: Soy vegano, sin gluten, sin lácteos, etc."
        value={notas}
        onChange={(e) => setNotas(e.target.value)}
        style={{
          width: "100%",
          minHeight: "100px",
          padding: "0.5rem",
          fontSize: "1rem",
        }}
      ></textarea>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <button onClick={handleAtras} style={{ padding: "10px 20px" }}>
          ⬅ Atrás
        </button>
        <button onClick={handleGuardarYContinuar} style={{ padding: "10px 20px" }}>
          Siguiente ➡
        </button>
      </div>
    </div>
  );
}

export default PlatosCombinados;