import React from 'react';
import{CategoryItem}from'./CategoryItem';
import{Meal} from './Meal'
function MealsList({meals=[]}) {
   
  return (
   <div className="list">
    {meals.map(el=>(
        <Meal key={el.idMeal} {...el}/>
    ))}
   </div>
  );
}
export {MealsList}