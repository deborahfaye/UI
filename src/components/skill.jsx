import React, { Component } from 'react';
import PropTypes from 'prop-types';
 import '../css/skill.css';

class Skill extends Component{
   
    render(){
        return(
            
                <tr>
                {/* <td>{this.props.id}</td> */}
                <td>{this.props.skill}</td>
                </tr>
           
        );
    }

}


Skill.propTypes = {
    // id:PropTypes.number,
    skill: PropTypes.string
}

export default Skill;