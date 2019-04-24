import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/adddev.css';
import Dev from './dev';
import {
    devList,
  }from '../util/service-helper'; 
//    import axios from 'axios';

class AddDev extends Component{

//for deVList
constructor(props){
    super(props);

    this.state={
        getdevList:[]
    };
}
componentDidMount(){
    this.getDev();
}

getDev(){
    devList().then(res => {
        this.setState({getdevList:res.data});
    })
}

    render(){

        let getdevList = this.state.getdevList;
        
        console.log('getdev');
        console.log(getdevList);


        return(
            <div className="developer">

                <div className="inputtab">
                <fieldset>
                  <legend>Add Developer:</legend>

                <p>FirstName:</p>
                <input 
                type="text" 
                name="firstname" 
                id="firstname"  
                placeholder="Input firstname.." 
                onChange={this.handleChange} 
                // value={this.state.skill_type} 
                >
                </input>

                
                <p>MiddleName:</p>
                <input 
                type="text" 
                name="middlename" 
                id="middlename"  
                placeholder="Input middlename.." 
                onChange={this.handleChange} 
                // value={this.state.skill_type} 
                >
                </input>

                <p>LastName:</p>
                <input 
                type="text" 
                name="lastname" 
                id="lastname"  
                placeholder="Input lastname.." 
                onChange={this.handleChange} 
                // value={this.state.skill_type} 
                >
                </input>

                <p>BirthDate:</p>
                <input 
                type="date"
                name="bday" 
                id="bday"  
                placeholder="Input birthdate.." 
                onChange={this.handleChange} 
                // value={this.state.skill_type} 
                >
                </input>

                <p>Position:</p>
                <input 
                type="text" 
                name="position" 
                id="position"  
                placeholder="Input position.." 
                onChange={this.handleChange} 
                // value={this.state.skill_type} 
                >
                </input>

                
                <button type="submit"  className="samplebutt" onClick={this.handleAdddev}>Add</button> 

                </fieldset>
                </div>
 

                   <div className='dev-list-panel'> 
                      <table className='devlist1'>
                        <tr>
                        <th>FirstName</th>
                        <th>MiddleName</th>
                        <th>LastName</th>
                        <th>BirthDate</th>
                        <th>Position</th>
                        </tr>
                       <tbody>
                       
                        {getdevList.map(user => {
                            return (
                                    <Dev 
                                        key={user.id} 
                                        firstName={user.firstName}
                                        middleName={user.middleName}
                                        lastName={user.lastName}
                                        birthDate={user.birthDate}
                                        position={user.position}
                                         />
                               
                            )
                        })}
                        </tbody>
                         </table>  
                  </div>

                
            </div>
        );

    }
}

AddDev.propTypes = {
    // handleAddSkill: PropTypes.func,
    // handleAddSkill2: PropTypes.func,
    getdevList: PropTypes.array,

} 
export default AddDev;