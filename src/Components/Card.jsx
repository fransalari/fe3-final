import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import './styles/Card.css';

const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: { id, name, username } });
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="Doctor" />
      <h2>{name}</h2>
      <p>{username}</p>
      <Link to={`/dentist/${id}`}>Detalle</Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;