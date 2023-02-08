import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories,filterCategories, orderProducts } from "../../Redux/action";
import {styles} from "./Filter.module.css"

export const Filters = ()=> {
  //usamos hook dispatch para el despacho
    const dispatch = useDispatch();
    //traemos el estado de las categorias
    const categories = useSelector((state) => state.categories);

    //cremamos la funcion para el filtrado en la accion
    const handleCategories = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        dispatch(filterCategories(e.target.value));
   
      };
//documentando un poco para un commit 
      const handleOrder = (e)=>{
        e.preventDefault()
        dispatch(orderProducts(e.target.value))
        
      }
//usamos el useEfecct para despachar la accion
      useEffect(() => {
        dispatch(getCategories());
      }, []);

    return (
        <div>
        <select
          onChange={(e) => handleCategories(e)}
          id="select-diets"
          cla
        >
          <option value="all">Categories</option>
          {categories?.map((el) => {
            return (
              <option key={el.id} value={el.name}>
                {el.name}
              </option>
            );
          })}
        </select>

        <div>
        <select
   
          onChange={(e) => handleOrder(e)}
          id="select-order"
        >
          <option value="all">Order Alphabetically</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        
        <select
          onChange={(e) => handleOrder(e)}
          id="select-order"
        >
          <option value="all">Price</option>
          <option value="desc">1-100</option>
          <option value="asc">100-1</option>
        </select>
      </div>
      </div>
    )
}