import React from "react";
import { NavBar } from "../NavBar/NavBar";
import logo from "../../img/iluminarte.png"
import styles from "./Home.module.css"
import { Novedades } from "../CardsNovedades/Novedades";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <img className={styles.img} src={logo} alt="Logo" />

<div className={styles.novedades} >
<Novedades />
</div>

<div className={styles.footer} >
<Footer />
</div>

    </div>
  );
};
