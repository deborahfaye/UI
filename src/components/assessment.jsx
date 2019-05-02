import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/assessment.css';

class Assessment extends Component{
   
    render(){
        return(
                <tr>
                <td>{this.props.id}</td>
                <td>{this.props.devId}</td>
                <td>{this.props.skill_name}</td>
                <td>{this.props.monthsExp}</td>
                <td>{this.props.skillLevel}</td>
                <th><button type="submit"  className="update" onClick={this.handleUpdate}>Update</button></th> 
                </tr>
        );
    }

}


Assessment.propTypes = {
    id:PropTypes.number,
    devId: PropTypes.number,
    skill_name:PropTypes.string,
    monthsExp: PropTypes.number,
    skillLevel: PropTypes.number,
}

export default Assessment;