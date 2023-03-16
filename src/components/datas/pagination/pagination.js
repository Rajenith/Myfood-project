import React from "react";
import "../data.css";
const Pagination=({postPerPage,totalPost,Paginate}) =>{
    const pageNumbers= [];

     for( let i=1;i<= Math.ceil(totalPost / postPerPage);i++){
        pageNumbers.push(i);
     }
     return(
        <div>
            <div id='pagination'>
                {pageNumbers.map(number => (
                    <div id="number" onClick={()=>Paginate(number)}>
                        <span>{number}</span>
                    </div>
                ))}
            </div>
        </div>
     )
}
export default Pagination