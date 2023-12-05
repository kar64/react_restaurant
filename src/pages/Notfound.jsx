import React from 'react';
import {BrowserRouter as Router,Route,Switch,Routes,Link} from 'react-router-dom'
function Notfound(){
    return <h1>Not found!!! <Link to="/">Home</Link></h1>
}
export {Notfound};