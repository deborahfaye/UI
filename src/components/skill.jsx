import React, { Component } from 'react';
import PropTypes from 'prop-types';
 import '../css/skill.css';

class Skill extends Component{
   
    render(){
        return(
            
                <tr>
                <td>{this.props.skill}</td>
                </tr>
           
        );
    }

}


Skill.propTypes = {
    skill: PropTypes.string
}

export default Skill;