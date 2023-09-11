import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import '../Components/styles/Favs.css';

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className="card-grid-container">
      <h1>Dentistas Destacados</h1>
      <div className="card-grid">
        {state.favs.map((dentist) => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
    </div>
  );
};

export default Favs;