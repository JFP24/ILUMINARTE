import React, { useEffect, useState }from "react";
import { NavBar } from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/action";
import styles from "./productos.module.css"
import { Link } from "react-router-dom";
import { Filters } from "../Filters/Filter";

export const Products = () => {
  //Usamos hook para el despacho
    const dispatch = useDispatch();
    //traemos de el reducer la variable con el objeto en el cual se encuetra la informacion
    const allProducts = useSelector((state) => state.allProducts);
    //usamos el useEffect para hacer la peticion en el ciclo de vida de el componenete
    useEffect(() => {
        dispatch(getAllProducts());
      }, [dispatch]);
console.log(allProducts)
//retornamos jsx
  return (
    <div>
      <NavBar />

    <div className={styles.flex}>
      <div className={styles.filter}><Filters /></div>
   {allProducts.map((d=> {
    return(
    <div className={styles.container}>
    <img className={styles.image} src={d.Image} alt="" />
    <h1 className={styles.name}> {d.Name}</h1>
    <p className={styles.price}>Precio : {d.Price}</p>
    <Link to={`/CardDetail/${d.id}`}>
        <button className={styles.detalles}>Detalles</button>
      </Link>
   </div>

     )
     }))}
   </div>
    </div>
  
  );
};
