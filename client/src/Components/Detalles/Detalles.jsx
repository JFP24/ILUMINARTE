import React from "react";
import { NavBar } from "../NavBar/NavBar";
import {Footer} from "../Footer/Footer"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailProducts} from "../../Redux/action";
import styles from "./Detalles.module.css";

export const Detalles = ()=>{
//usamos hook dispacht para el despacho
    const dispatch = useDispatch();
    //traemos la variable de reducer donde contiene la informacion de el detalle de los productos
    const details = useSelector((state) => state.detailsProducts);
    //obtenemos el id de el parametro para enviarlo a la action
    const { id } = useParams();

    useEffect(() => {
        //enviamos la funcion con su id como parametro
        dispatch(getDetailProducts(id));
      }, [dispatch, id]);

console.log(details)

    return (
        <div>
            
                <NavBar/>
           
            <div className={styles.flex}>

           <div className={styles.container}>
            <h2 className={styles.name}>{details.name}</h2>
            <img  className={styles.image} src={details.image} alt="Imagen Producto" />
            <h2 className={styles.description}>{details.description}</h2>
            <h2 className={styles.price}>Precio: {details.price}</h2>
           </div>
            </div>
            <div className={styles.footer}>
            <Footer/>
            </div>
            </div>

    )
}