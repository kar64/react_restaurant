import React,{useEffect,useState}from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import{getFilteredCategory} from'../api';
import{Preloader}from'../components/Preloader';
import{MealsList} from'../components/MealsList';

function Category(){
    const{name}=useParams();
    const[meals,setMeals]=useState([]);
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    useEffect(()=>{
        getFilteredCategory(name).then(data=>setMeals(data.meals));
    },[name]);
    return <>
    <button className="btn" onClick={goBack}>Bo Back</button>
         {!meals.length?<Preloader/>:<MealsList meals={meals}/>}
    </>

        
 
}
export {Category};