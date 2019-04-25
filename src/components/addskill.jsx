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
      query:'',
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
   event.preventDefault();

    if(this.state.skill===''){
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
    .then(res => {console.log(res.data);console.log(res); })
    
    console.log('addSkill');
    console.log(this.state.skill);
    
   
    this.setState({
      skill:''
    });

     window.location.reload()
   
  }
  
}

// search
handleInputChange = () => {
  this.setState({query:this.search.value})

  console.log("inputfor search");
  // console.log(this.search.value);
  // console.log({query});
  
  const url = "http://localhost:8080/CaseStudy/rest/skills?skill=" + this.search.value;

  axios.get(url)
  .then(response => {
    this.setState({searchlist:response.data});
    console.log(response);
    })

    this.setState({
      query:''
    });

}



render(){

let getskillList = this.state.getskillList;
let searchlist =this.state.searchlist;
console.log("hello world");
console.log(getskillList);


return(
    <div className="addedskill"> 
          <p></p>
        <div className="right">  
        {/* <p></p>     */}
        <fieldset>
        <legend>Add Skill:</legend>
        <br></br>
        Skill: 
        <br></br>
        <input 
        type="text" 
        name="skill" 
        id="skill" 
        required="required" 
        placeholder="Input a skill.." 
        onChange={this.handleChange} 
        >
        </input>
        
        <button type="submit"  className="samplebutt" onClick={this.handleAddSkill2}>Add</button> 
        </fieldset>       
        <span>Refresh the Page after submission ..</span>
        </div>
 
        <div className="search">  
        <input
           ref={input => this.search = input}
           type="text" 
           name="search" 
           id="search" 
           maxLength={15} 
           placeholder="Search"
          //  values={this.state.value}
           onChange={this.handleInputChange}  
        >
     

     </input> 
     {/* <button type="submit" name="search" id="search" onClick={this.handleFilter}  >Search</button>  */}
          
    
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

         <div className='search-panel' >
         <p>Search:</p>
         {searchlist.map(serch =>{
         return(
             <li key={serch.id}>
             <Skill key={serch.id} skill={serch.skill}/>
            </li>
             )
             }) }
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