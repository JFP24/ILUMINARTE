import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories,filterCategories } from "../../Redux/action";

export const Filters = ()=> {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
console.log(categories)
    const handleCategories = (e) => {
        e.preventDefault();
        dispatch(filterCategories(e.target.value));
   
      };

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
      </div>
    )
}