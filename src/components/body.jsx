import React, { Component } from 'react';
import '../css/body.css';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import AddSkills from "./addskill";
import AddDev from "./adddev";
import AddAssessment from "./addassessment";
import SearchFunc from './search';


//  contains the nav buttons
class Body extends Component{
    render(){
        return(
            <HashRouter>
<div className="body1" >
<ul className="nav" >
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/askill">Skill</NavLink></li>
     <li><NavLink to="/dev">Developer</NavLink></li>
     <li><NavLink to="/askill2">Skill Assessment</NavLink></li>  
     <li><NavLink to="/upskill">Search</NavLink></li>   
    

</ul>   
 <div className='content'>
 <Route exact path="/" component={Body2}/>
 <Route path="/askill" component={AddSkills}/>
 <Route path="/dev" component={AddDev}/>
 <Route path="/askill2" component={AddAssessment}/>
 <Route path="/upskill" component={SearchFunc}/> 

  </div>
</div>       
</HashRouter> 
        );
    }

}

// main window
class Body2 extends Component{
    render(){
        return(
    <div className="body2"  >
 
</div>        
        );
    }

}


export default Body;
export {Body, Body2};


