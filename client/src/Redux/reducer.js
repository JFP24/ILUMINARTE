
import {
    GET_PRODUCTS,
    GET_DETAILS,
    GET_CATEGORIES,
    FILTER_BY_CATEGORIES,
    ORDER_PRODUCTS
   
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
          //hacemos una copia del estado
      const allProduct = [...state.filterCategories];
      const categorieFilter =
      //si el valor del target es all devolvemos todos los productos
      action.payload === "all"
      ? state.products
      //si no , filtramos el target que llegue qe son de las categorias y devolvemos los que coincidan filtrados por categorias
      : allProduct.filter((el) => el.Categories.map(e=>e.name).includes(action.payload));
     
    
      return {
        ...state,
        //retornamos todos los productos con el valor que hallamos recibido
        allProducts: [...categorieFilter],
      };

      case ORDER_PRODUCTS:
      if (action.payload === "all") {
        return {
          ...state,
          allProducts: [...state.products],
        };
      }

      if (action.payload === "A-Z") {
        return {
          ...state,
          allProducts: [...state.allProducts].sort((prev, next) => {
            if (prev.Name > next.Name) return 1;
            if (prev.Name < next.Name) return -1;
            return 0;
          }),
        };
      }

      if (action.payload === "Z-A") {
        return {
          ...state,
          allProducts: [...state.allProducts].sort((prev, next) => {
            if (prev.Name > next.Name) return -1;
            if (prev.Name < next.Name) return 1;
            return 0;
          }),
        };
      }

      if (action.payload === "desc") {
        return {
          ...state,
          allProducts: [...state.allProducts].sort(
            (prev, next) => prev.Price - next.Price
          ),
        };
      }

      if (action.payload === "asc") {
        return {
          ...state,
          allProducts: [...state.allProducts].sort(
            (prev, next) => next.Price - prev.Price
          ),
        };
      } else {
        return { ...state.allProducts };
      }
    default:
        return state;
    }

};

export default rootReducer;
