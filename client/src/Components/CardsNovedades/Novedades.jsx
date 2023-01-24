import React from "react";
import {data} from "../../DataNovedades/data"
import style from "./Novedades.module.css"

export const Novedades = ()=> {
console.log(data)
const project = data

    return (
       
<div>
    <h1 className={style.h2}>NOVEDADES</h1>
<div className={style.flex} >


{project.map((d)=>{
return(
<div className={style.container}> 
<img  className={style.img} src={d.image} alt="" />
<p> {d.name}</p>
</div>
)
})}
</div>
</div>
    )
}