import { useState } from "react";
import "./App.css";
import data from "./data.js"
import Tour from "./Component/Tour.js"

function App() {
  const[tour,setTour]=useState(data);
  function buttonhandler(id){
    const newTour = tour.filter(tours=> tours.id!==id);
    setTour(newTour);

  }
  function reset(){
    setTour(data);
  }
  if(tour.length===0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="refresh_btn" onClick={reset}>
          Refresh
        </button>
      </div>
    )
  }





  return (
   
    <div className="container">
    <h2 className="title">Let's Plan With Love</h2>
    <Tour tours={tour} removeTours ={buttonhandler}></Tour>
      
    </div>
  );
}

export default App;
