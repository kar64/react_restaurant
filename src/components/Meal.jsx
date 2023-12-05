import React from 'react';
import {Link} from 'react-router-dom'
function Meal(props) {
    const{strMeal,strMealThumb,idMeal}=props;
   
  return (
    <div className="card">
        <div className="card-image">
          <img src={strMealThumb} alt={strMeal}/>
          <span className="card-title" style={{ color: '#fff'}}>{strMeal}</span>
          
        </div>
       
        <div className="card-action">
            <Link to={`/meal/${idMeal}`} className="btn">Watch recipe</Link>
        </div>
      </div>
  );
}
export {Meal}