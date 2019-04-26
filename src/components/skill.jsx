import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import '../css/user.css';


class Skill extends Component{
   
    render(){
        return(
            <div className='skills'>
                <p className='user-skill'>{this.props.skill}</p>
                
            </div>
        );
    }

}


Skill.propTypes = {
    skill: PropTypes.string
}

export default Skill;