import React, { useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(true);

  const Visibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button
        onClick={Visibility}
        className="border border-gray-300 bg-green-500 rounded-md font-Josefin"
      >
        {isVisible ? "Ocultar Footer" : "Mostrar footer"}
      </button>
      {isVisible && (
        <div className="flex border border-red-500 justify-evenly bg-gray-200 font-Josefin">
          <article className="flex flex-col border border-black">
            <ul>
              <h3 className="text-2xl">Nosotros</h3>
              <br />
              <li className="text-xl">
                <a>Quienes somos</a>
              </li>
            </ul>
          </article>
          <article className="flex flex-col border border-black">
            <h3 className="text-2xl">Soporte</h3>
            <br />
            <ul>
              <li className="text-xl">Precios</li>
              <br />
              <li className="text-xl">Certificaciones</li>
              <br />
              <li className="text-xl">Guias</li>
            </ul>
          </article>
          <article className="flex flex-col border border-black">
            <h3 className="text-2xl">Nosotros</h3>
            <br />
            <ul>
              <li className="text-xl">About</li>
              <br />
              <li className="text-xl">Empleos</li>
            </ul>
          </article>
          <article className="flex flex-col border border-black">
            <h3 className="text-2xl">Contacto</h3>
            <br />
            <ul>
              <li className="text-xl">Email</li>
            </ul>
          </article>
        </div>
      )}
    </div>
  );
}
