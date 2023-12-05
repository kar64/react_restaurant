import React from 'react';
import {Link} from 'react-router-dom'
function CategoryItem(props) {
    const{idCategory,strCategory,strCategoryThumb,strCategoryDescription}=props;
   
  return (
    <div className="card">
        <div className="card-image">
          <img src={strCategoryThumb} alt={strCategory}/>
          <span className="card-title" style={{ color: '#66bb6a'}}>{strCategory}</span>
          
        </div>
        <div className="card-content">
          <p>{strCategoryDescription.slice(0,90)}...</p>
        </div>
        <div className="card-action">
            <Link to={`/category/${strCategory}`} className="btn">Watch category</Link>
        </div>
      </div>
  );
}
export {CategoryItem}