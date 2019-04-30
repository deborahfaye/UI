import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/dev.css';


class Dev extends Component{
   
    render(){
        return(
                <tr>
                <td>{this.props.id}</td>
                <td>{this.props.firstName}</td>
                <td> {this.props.middleName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.birthDate}</td>
                <td>{this.props.position}</td>
                </tr>
        );
    }

}


Dev.propTypes = {
    devId:PropTypes.number,
    firstName: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string,
    birthDate: PropTypes.instanceOf(Date),
    position: PropTypes.string,
}

export default Dev;