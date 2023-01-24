import React from "react";
import styles from "./NavBar.module.css";
import Logo from "../../img/Logo.png";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
      <Link to={"/Home"}>
        <img src={Logo} alt="Logo" />
   
        </Link>
      </div>

      <div>
        <ul className={styles.navLinks}>
          <li>
          <Link to={"/Products"}>
        <a className={styles.crear}>Productos</a>
      </Link>
          </li>
          <li>
          <Link to={"/About"}>
        <a className={styles.crear}>Nosotros</a>
      </Link>
          </li>
          <li>
          <Link to={"/Contact"}>
        <a className={styles.crear}>Contacto</a>
      </Link>
          </li>
        </ul>
      </div>

      <a href="" className={styles.btn}>
        <button>Registrarse</button>
        <button>Iniciar Sesion</button>
      </a>
    </div>
  );
};
