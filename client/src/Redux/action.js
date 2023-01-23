import axios from "axios";
import {
  GET_PRODUCTS,

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