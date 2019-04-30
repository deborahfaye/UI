import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/assessment.css';

class Assessment extends Component{
   
    render(){
        return(
                <tr>
                <td>{this.props.id}</td>
                <td>{this.props.devId}</td>
                <td>{this.props.skillId}</td>
                <td>{this.props.monthsExp}</td>
                <td>{this.props.skillLevel}</td>
                </tr>
        );
    }

}


Assessment.propTypes = {
    id:PropTypes.number,
    devId: PropTypes.number,
    skillId: PropTypes.number,
    monthsExp: PropTypes.number,
    skillLevel: PropTypes.number,
}

export default Assessment;