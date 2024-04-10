import React from "react";
import Card from "./Card";
function Tour({tours,removeTours}){
    return(
        <div>
        <div className="cards">
        {
            tours.map(tour=>(
                 <Card key={tour.id} {...tour} removeTour={removeTours}></Card> 
              
            ))
        }
         
          


        </div>


        </div>
    )
}

export default Tour;