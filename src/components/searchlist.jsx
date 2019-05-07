import React, { Component } from 'react';
import PropTypes from 'prop-types';
//  import '../css/skill.css';

class SearchList extends Component{
   
    render(){
        return(
            
                <tr>
                <td>{this.props.devId}</td>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.skill_name}</td>
                <td>{this.props.skillLevel}</td>
                <td>{this.props.monthsExp}</td>
                </tr>
           
        );
    }

}


SearchList.propTypes = {
    devId: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    skill_name: PropTypes.string,
    skillLevel: PropTypes.number,
    monthsExp: PropTypes.number,
}

export default SearchList;