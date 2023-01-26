import axios from "axios";
import {
  GET_PRODUCTS,
  GET_DETAILS

} from "./types.js";

export const getAllProducts = () => {
    return async (dispatch) => {
      try {
        const allProducts = await axios.get(`http://localhost:3001/api/v1/products`);
        return dispatch({
          type:   GET_PRODUCTS,
          payload: allProducts.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };


  //Get details for id
export const getDetailProducts = (id) => {
  return async (dispatch) => {
    try {
      const productsDetails = await axios(`http://localhost:3001/api/v1/detailProduct/${id}`);
      return dispatch({
        type:  GET_DETAILS,
        payload: productsDetails.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};