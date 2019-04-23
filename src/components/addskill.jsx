import React, { Component} from 'react';
import PropTypes from 'prop-types';
import '../css/addskill.css';
import Skill from './skill';
import {
    skillList,
  }from '../util/service-helper'; 
   import axios from 'axios';

class AddSkills extends Component {
   
   
 // for skilllist  
  constructor(props){
    super(props);
  
    this.state={
      getskillList:[],
      skill:''
    };
    //  this.handleChange = this.handleChange.bind(this);
  }

componentDidMount(){
  this.getSkills();
}

getSkills(){
  skillList().then(res =>{
    console.log('res');
    console.log(res);
    
    this.setState({getskillList:res.data});
  })
}



 handleChange = (event) =>{
  this.setState({
      [event.target.name]: event.target.value
      
  });
}


handleAddSkill2 = (event) => {
  
//   console.log("skill_type");
//   console.log(skill_type:this.state.skill_type);
  
  const addSkill=
    {
        skill:this.state.skill
    };

  console.log("input");
  console.log(addSkill);
     
  axios.post('http://localhost:8080/CaseStudy/rest/skills', addSkill)
  .then(res => {console.log(res.data);console.log(res); })
   
  console.log('addSkill');
  console.log(addSkill);

  this.setState({
     skill:''
   });

   event.preventDefault();

}

handleAddSkill = (event) => {
    
    console.log("addskill");
    console.log(addSkill);
  
    let addSkill = this.state.addSkill;
    let getskillList =[...this.state.getskillList];
  
    getskillList.push(addSkill);
  
    this.setState({getskillList: getskillList});
    console.log('getSkillList');
    console.log(getskillList);
  
    event.preventDefault();
  }  


   
   
render(){

let getskillList = this.state.getskillList;
console.log("hello world");
console.log(getskillList);


return(
    <div className="AddSkill"> 
          <p></p>
        <div className="right">  
        <p></p>    
        <fieldset>
        <legend>Add Skill:</legend>
        <p>Skill: </p>
        <input 
        type="text" 
        name="skill" 
        id="skill"  
        placeholder="Input a skill.." 
        onChange={this.handleChange} 
        // value={this.state.skill_type} 
        >
        </input>
        <p></p>
        <button type="submit"  className="samplebutt" onClick={this.handleAddSkill2}>Add</button> 
        </fieldset>       
        </div>
 
 
         <div className='skill-list-panel' >
         <ul className="skill-list">
         <p>Skill List:</p>
       {getskillList.map(skl =>{
         return(
             <li key={skl.id}>
             <Skill key={skl.id} skill={skl.skill}/>
            </li>
             )
             }) }
         </ul>
         </div>

        </div>
        ); 
    }
  }

 AddSkills.propTypes = {
    handleAddSkill: PropTypes.func,
    handleAddSkill2: PropTypes.func,
    getskillList: PropTypes.array,

} 
export default AddSkills;