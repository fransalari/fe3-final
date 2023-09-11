import React, { createContext, useReducer, useMemo } from "react";

// Estado inicial
export const initialState = {
  theme: "light", // Tema inicial: claro
  data: [], // Los datos de la API se almacenarán aquí
  favs: [], // Almacenar las tarjetas favoritas aquí 
};

//Crear el contexto Global
export const ContextGlobal = createContext(undefined);

//Crear ContextProvider y Reducer para cambiar el tema
export const ContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DATA":
        return { ...state, data: action.payload };
      case "TOGGLE_THEME":
        return { ...state, theme: state.theme === "light" ? "dark" : "light" };
      case "ADD_FAV":
        return { ...state, favs: [...state.favs, action.payload] };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //Utilizar useMemo para optimizar el contexto
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};