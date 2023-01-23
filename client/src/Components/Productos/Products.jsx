import React, { useEffect, useState }from "react";
import { NavBar } from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/action";


export const Products = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.allProducts);
    useEffect(() => {
        dispatch(getAllProducts());
      }, [dispatch]);

      console.log(allProducts)

  return (
    <div>
    <NavBar />
      {allProducts.map((d=> {

      return(

<div>
 <h1>name : {d.name}</h1>

</div>

      )
      }))}
    </div>
  );
};
