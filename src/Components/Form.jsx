import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 5 && email.includes("@")) {
      console.log("Form submitted:", name, email);
      setSubmitted(true);
    }
  };

  return (
    <div>
      {submitted ? (
        <p>
          Gracias {name}, te contactaremos cuanto antes vía mail
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Form;