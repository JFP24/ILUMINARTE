
import {
    GET_PRODUCTS,
    GET_DETAILS
   
  } from "./types";
  
  const initialState = {
    allProducts: [],
    detailsProducts: {}
   
  };

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
case GET_PRODUCTS :
    return {
        ...state,
        allProducts: action.payload
    }

    case GET_DETAILS :
        return {
            ...state ,
            detailsProducts : action.payload
        }
    default:
        return state;
    }

};

export default rootReducer;
