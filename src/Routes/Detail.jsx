import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Components/styles/Detail.css';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error("Error fetching dentist data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Detalle del Dentista</h1>
      {dentist ? (
        <>
          <p>Nombre: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Sitio web: {dentist.website}</p>
        </>
      ) : (
        <p>Cargando información...</p>
      )}
    </div>
  );
};

export default Detail;