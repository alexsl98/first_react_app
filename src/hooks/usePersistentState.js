import { useState, useEffect } from "react";

function usePersistentState(key, initialState) {
  // Cargar estado guardado
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initialState;
  });

  // Guardar cuando cambie
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistentState;