import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const planesInfo = {
  Plata: {
    recepcion: "Recepción sencilla: empanadas, figazas, mini pebetes...",
    catering: "Catering básico",
  },
  Golden: {
    recepcion: "Recepción premium: finger food, bollos, albondiguitas...",
    catering: "Catering gourmet",
  },
  "All Inclusive": {
    recepcion: "Recepción todo incluido: barra libre, shows, finger food...",
    catering: "Catering full service",
  },
};

function Planes() {
  const navigate = useNavigate();
  const [planSeleccionado, setPlanSeleccionado] = useState(null);
  const [dni, setDni] = useState("");

  // Recuperar DNI guardado desde Clientes
  useEffect(() => {
    const dniGuardado = localStorage.getItem("dni");
    if (!dniGuardado) {
      // Si no hay DNI, redirigir al cliente
      navigate("/Clientes");
    } else {
      setDni(dniGuardado);
    }
  }, [navigate]);

  const handleSeleccion = (plan) => {
    const info = planesInfo[plan];
    setPlanSeleccionado(plan);

    // Guardar la info en localStorage
    localStorage.setItem("plan", plan);
    localStorage.setItem("recepcion", info.recepcion);
    localStorage.setItem("catering", info.catering);

    console.log("Plan seleccionado:", plan);
    console.log("DNI asociado:", dni);
  };

  const irASiguiente = () => {
    navigate("/PrimerPlato");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Elegí tu plan</h2>
      <p><strong>DNI del cliente:</strong> {dni}</p>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        {Object.keys(planesInfo).map((plan) => (
          <button key={plan} onClick={() => handleSeleccion(plan)}>
            Plan {plan}
          </button>
        ))}
      </div>

      {planSeleccionado && (
        <div>
          <h3>Seleccionaste: {planSeleccionado}</h3>
          <p><strong>Recepción:</strong> {planesInfo[planSeleccionado].recepcion}</p>
          <p><strong>Catering:</strong> {planesInfo[planSeleccionado].catering}</p>
          <button onClick={irASiguiente}>Siguiente</button>
        </div>
      )}
    </div>
  );
}

export default Planes;