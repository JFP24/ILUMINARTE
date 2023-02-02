
import {
    GET_PRODUCTS,
    GET_DETAILS,
    GET_CATEGORIES,
    FILTER_BY_CATEGORIES
   
  } from "./types";
  
  const initialState = {
    allProducts: [],
    detailsProducts: {},
    categories : [],
    filterCategories : [],
    products:{}
   
  };

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
case GET_PRODUCTS :
    return {
        ...state,
        allProducts: action.payload,
        filterCategories : action.payload,
        products : action.payload
    }

    case GET_DETAILS :
        return {
            ...state ,
            detailsProducts : action.payload
        }

        case GET_CATEGORIES :{
            return {
                ...state ,
                categories : action.payload
            }
        }
        case FILTER_BY_CATEGORIES:
      const allProduct = [...state.filterCategories];
      console.log(allProduct, "este es")
      const categorieFilter =
        action.payload === "all"
          ? state.products
          : allProduct.filter((el) => el.categories.includes(action.payload));
      return {
        ...state,
        allProducts: [...categorieFilter],
      };
    default:
        return state;
    }

};

export default rootReducer;
