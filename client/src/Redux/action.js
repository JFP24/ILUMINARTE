import axios from "axios";
import {
GET_PRODUCTS,
GET_DETAILS,
GET_CATEGORIES,
FILTER_BY_CATEGORIES,
ORDER_PRODUCTS
} from "./types.js";


//get all products
export const getAllProducts = () => {
  //return the dispatch
    return async (dispatch) => {
      try {
        //calls the api the all products created by the backend whith promise
        const allProducts = await axios.get(`http://localhost:3001/api/v1/products`);
        return dispatch({
          //return dispatch and payload with the data of the promise
          type:   GET_PRODUCTS,
          //data of promise of back
          payload: allProducts.data,
        });
        //depure the error
      } catch (error) {
        console.log(error);
      }
    };
  };


  //Get details for id
export const getDetailProducts = (id) => {
  //return dispatch
  return async (dispatch) => {
    try {
      //calls the api the details created by backend whith the backend
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

//get all categories
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

//function of filters of categories
export const filterCategories = (value) => {
  return async function (dispatch) {
    return dispatch({ type: FILTER_BY_CATEGORIES, payload: value });
  };
};

export const orderProducts = (value) => {
  return async function (dispatch) {
    return dispatch({ type: ORDER_PRODUCTS, payload: value });
  };
};