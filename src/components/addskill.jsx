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
      skill:'',
      query:false,
      searchlist:[]
    };
  }

componentDidMount(){
  this.getSkills();
}

// Gets all the skill list in the database
getSkills(){
  skillList().then(res =>{
    console.log('res');
    console.log(res);
    
    this.setState({getskillList:res.data});
  })
}


// handle for addskills(post)
handleChange = (event) =>{
  this.setState({
      [event.target.name]: event.target.value
  });

}


handleAddSkill2 = (event) => {

      if(this.state.skill_name===''){
        console.log('no input');
        alert("Input a Skill !!");
      }
      else{
        const addSkill=
      {
        skill:this.state.skill
      };

      console.log("input");
      console.log(addSkill);

      axios.post('http://localhost:8080/CaseStudy/rest/skills', addSkill)
      .then(res => {console.log(res.data);console.log(res);})
      
      console.log('addSkill');
      console.log(this.state.skill);
      
    
      this.setState({
        skill:''
      });

      this.getSkills(); 
   
  }
  
}

render(){


console.log("hello world");
console.log(getskillList);



 let getskillList = this.state.getskillList;

console.log("hello world");
console.log(getskillList);

return(
    <div className="addedskill"> 
          <p></p>
          <div className="right">  
                                  <fieldset>
                                  <legend>Add Skill:</legend>
                                  <br></br>
                                  Skill: 
                                  <br></br>
                                  <input type="text" name="skill" id="skill" required="required" placeholder="Input a skill.." onChange={this.handleChange}></input>
                          
                                  <button type="submit"  className="samplebutt" onClick={this.handleAddSkill2}>Add</button> 
                                  </fieldset>       
            
              </div>
              
              <div className='skill-list-panel' >
              
                            <table className='skill-list-table'>
                            <tr>
                            <th>Skill</th>
                            </tr>
            
                            <tbody>  
                             {getskillList.map(skil =>{
                              return (
                                 
                                  <Skill 
                                  skill={skil.skill}/>
                                  
                                  )
                                  }) } 
                            </tbody>
                            </table>
              </div>

        </div>
        ); 
    }
  }

 AddSkills.propTypes = {
    handleAddSkill: PropTypes.func,
    getskillList: PropTypes.array,
   
} 
export default AddSkills;