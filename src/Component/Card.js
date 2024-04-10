import React from "react";
import { useState } from "react";

function Card({removeTour,...props}){
    const {id,name,price,info,image}=props;
    const[readmore,setRead]= useState(false);
    const desc = readmore?info: `${info.substring(0,200)}...`
    

    function readmoreHandler(){
        setRead(!readmore);


    }
    return(
        <div>
            <div className="Card">

              <img src={image} className="image" alt=""></img>
              <div className="tourdetails">
                 <h4 className="tour-price">₹{price}</h4>
                 <h4 className="tour-name">{name}</h4>

                 <div className="description">
              {desc}
               <span className="read-more" onClick={readmoreHandler}>{readmore?`show less`:`read more`}</span>

              </div>

              </div>
           
              <button className="btn" onClick={function(){removeTour(id)}}>
                Not Interested
                
             </button>


               

            </div>
        </div>

        
    )



}
 export default Card;