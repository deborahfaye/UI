import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/adddev.css';
import Dev from './dev';
import {
    devList,
  }from '../util/service-helper'; 
import axios from 'axios';

class AddDev extends Component{

//for deVList
constructor(props){
    super(props);

    this.state={
        getdevList:[],
        Id:"",
        firstName:"",
        middleName:"",
        lastName:"",
        birthDate:"",
        position:""
    };
}

// getting the list of developers from the database
componentDidMount(){
    this.getDev();
}

getDev(){
    devList().then(res => {
        this.setState({getdevList:res.data});
    })
}

//posting data to the database
handleChange2 = (event) =>{
    this.setState({
        [event.target.name]:event.target.value
    });
}

handleAddDev = (event) => {
   
    if(this.state.firstName === '' && this.state.lastName === '' &&
       this.state.birthDate === '' && this.state.position === ''){

        console.log('no input');
        alert("Input FirstName, LastName, BirthDate and Position")
       }else{
           const addDev={
               firstName:this.state.firstName,
               middleName:this.state.middleName,
               lastName:this.state.lastName,
               birthDate:this.state.birthDate,
               position:this.state.position
           };

           console.log("input");
           console.log(addDev);

           axios.post('http://localhost:8080/CaseStudy/rest/users', addDev)
           .then(res => {console.log(res.data); console.log(res);})
          
           console.log('addSkill');
           console.log(addDev);

           this.setState({
            Id:'',
            firstName:'',
            middleName:'',
            lastName:'',
            birthDate:'',
            position:''
          });
          event.preventDefault();
          
    window.location.reload()
        }


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

                FirstName: 
                <br></br>
                <input 
                type="text" 
                required="required"
                name="firstName" 
                id="firstName"  
                placeholder="Input firstname.." 
                onChange={this.handleChange2}  
                >
                </input>

                <br></br>
                MiddleName:
                <br></br>
                <input 
                type="text" 
                name="middleName" 
                id="middleName"  
                placeholder="Input middlename.." 
                onChange={this.handleChange2} 
                >
                </input>
                <br></br>
                LastName: 
                <br></br>
                <input 
                type="text" 
                required="required"
                name="lastName" 
                id="lastName"  
                placeholder="Input lastname.." 
                onChange={this.handleChange2} 
                >
                </input>
                <br></br>
                BirthDate: 
                <br></br>
                <input 
                type="date"
                required="required"
                name="birthDate" 
                id="birthDate"  
                placeholder="Input birthdate.." 
                onChange={this.handleChange2} 
                >
                </input>
                <br></br>
                Position: 
                <br></br>
               <input 
                type="text" 
                required="required"
                name="position" 
                id="position"  
                placeholder="Input position.." 
                onChange={this.handleChange2} 
                >
                </input>

                
                <button type="submit"  className="samplebutton" onClick={this.handleAddDev}>Add</button> 

                </fieldset>
                </div>
 

                   <div className='dev-list-panel'> 
                      <table className='devlist1'>
                        <tr>
                        <th>ID</th>
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
                                        id={user.id} 
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