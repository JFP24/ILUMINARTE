import axios from "axios";
import {
  GET_PRODUCTS,
  GET_DETAILS,
GET_CATEGORIES,
FILTER_BY_CATEGORIES
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

export const getCategories = ()=> {
return async (dispatch)=>{
  try{
    const categories = await axios(`http://localhost:3001/api/v1/categories`)
    return dispatch({
      type:   GET_CATEGORIES,
      payload: categories.data,
    });
  }catch(error){
    console.log(error)
  }
}

}

export const filterCategories = (value) => {
  return async function (dispatch) {
    return dispatch({ type: FILTER_BY_CATEGORIES, payload: value });
  };
};