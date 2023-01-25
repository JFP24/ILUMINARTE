import React, { useEffect, useState }from "react";
import { NavBar } from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/action";
import styles from "./productos.module.css"


export const Products = () => {
  //Usamos hook para el despacho
    const dispatch = useDispatch();
    //traemos de el reducer la variable con el objeto en el cual se encuetra la informacion
    const allProducts = useSelector((state) => state.allProducts);
    //usamos el useEffect para hacer la peticion en el ciclo de vida de el componenete
    useEffect(() => {
        dispatch(getAllProducts());
      }, [dispatch]);

//retornamos jsx
  return (
    <div>
      <NavBar />

    <div className={styles.flex}>
   {allProducts.map((d=> {
    return(
    <div className={styles.container}>
    <img src={d.image} alt="" />
    <h1> {d.name}</h1>
   </div>

     )
     }))}
   </div>
    </div>
  
  );
};
