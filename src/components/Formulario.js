import React from "react";
import "../Styles/Formulario.css";

const Formulario = () => {
  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/jobsyguionbajotres@gmail.com"
      method="POST"
    >
      <div className="formulario">
        <h3>Envíanos un mensaje</h3>
        <h5>Nombre y apellido</h5>
        <input type="text" name="Nombre" placeholder="Tu nombre completo" required />
        <h5>Email</h5>
        <input
          type="email"
          name="Email"
          placeholder="Correo electrónico"
          required
        />
        <h5>Número telefónico</h5>
        <input
          type="tel"
          name="Teléfono"
          placeholder="Teléfono o Celular"
          required
        />
        <h5>Mensaje</h5>
        <textarea
          name="Mensaje"
          placeholder="Escribe tu consulta aquí"
          required
        ></textarea>

        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_subject"
          value="Nuevo mensaje desde el formulario de la Web de RF Metalurgica"
        />
        <input type="hidden" name="_template" value="box" />

        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default Formulario;
