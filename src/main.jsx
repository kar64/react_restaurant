import React from 'react';
import {BrowserRouter as Router,Route,Switch,Routes,Link} from 'react-router-dom'
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom/client';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Home} from './pages/Home';

import {Notfound} from './pages/Notfound';
import {Category}from'./pages/Category';
import{Recipe}from'./pages/Recipe';

import { getMealById } from './api';

function App(){
    return(
        <Router basename='/react_restaurant'>
        {/* <Router basename='/'> */}
                  
            <Header/>
            <main className="container content">
                
                 
                  
                   <Routes>
                    <Route path="/" element={<Home/>}/>
                    
                    <Route path="/category/:name" element={<Category/>}/>
                    <Route path="/meal/:id" element={<Recipe/>}/>
                    <Route path="*" element={<Notfound/>}/>
                   </Routes>
               
            </main>
            <Footer/>
       
        </Router>

    )
        
}

// class App extends React.Component {
//   state = {
//     count: 0,
//   };
//   componentDidMount() {}
//   componentDidUpdate() {}
//   componentWillUnmount() {}
//   render() {
//     return (
//       <div className="App">
//         <h1>Zdorova class</h1>
//       </div>
//     );
//   }
// }

// ReactDom.render(
    
//         <App />
    

// ,document.querySelector('#root'));
const root=ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)