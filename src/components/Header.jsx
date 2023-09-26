import React from "react";

export default function Header() {
  return (
    <>
      <nav className="flex justify-center bg-green-200">
        <ul className="flex flex-row justify-center items-center text-3xl space-x-5 font-Josefin">
          <li>
            {" "}
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
          <li>
            <a href="">Comenta</a>
          </li>
          <li>
            <a href="">Nosotros</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
