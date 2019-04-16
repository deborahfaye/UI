import React, { Component } from 'react';
import '../css/body.css';

class Body extends Component{
    render(){
        return(

<div className="body1" >
<ul className="nav" >
     <li><a href="#askill">Add Skill</a></li>
     <li><a href="#dev">Add Dev</a></li>
     <li><a href="#askill2">Add Skill Assessment</a></li>  
     <li><a href="#upskill">Update Skill Assessment</a></li>  
     <input
           href="#search"
           type="text" 
           name="search" 
           id="search" 
           maxLength={15} 
           placeholder="Search" 
        //    onsubmit={this.handleChange} 
        //    value={this.state.search} 
        >
     </input> 
     <button type="submit" name="search" id="search"  >Search</button> 

</ul>   
</div>        
        );
    }

}

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


