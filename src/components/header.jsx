import React, { Component } from 'react';
import '../css/header.css';

// contains the title of the system
class Header extends Component{
    render(){
        return(

<div className="header"  >
<img width="60" height="60"></img>
&ensp; Developer Skills System
</div>
        );
    }

}

// the gold line between the title and nav button
class Header2 extends Component{
    render(){
        return(

<div className="header2"  >

</div>
        );
    }

}


export default Header;
export {Header, Header2};




