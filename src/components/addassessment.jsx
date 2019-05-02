import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Assessment from './assessment';
import '../css/addassessment.css'
import {
    assessList,
    skillList,
    devList,
  }from '../util/service-helper'; 
import axios from 'axios';
// import Skill from './skill.jsx'

class AddAssessment extends Component{

//for AssessmentList
constructor(props){
    super(props);

    this.state={
        getassessList:[],
        getskillList:[],
        getdevList:[],
        id:'',
        devId:'',
        monthsExp:'',
        skillLevel:'',
        skill_name:''
    };

}

//get the list of assessment
componentDidMount(){
    this.getAssessment();
    this.getskillLists();
    this.getdevLists();
}


getAssessment(){
    assessList().then(res => {
        this.setState({getassessList:res.data});
    })
}


getskillLists(){
    skillList().then(res =>{
        this.setState({getskillList:res.data});
    })
}

getdevLists(){
    devList().then(res =>{
        this.setState({getdevList:res.data});
    })
}

//post
handleChange1 = (event) => {
    console.log("input");
    this.setState({
        [event.target.name]:event.target.value
    });
}

handleAddAssessment = (event) => {
    console.log("input");
    // event.preventDefault();
     
     const Var={
         devId:this.state.devId,
         monthsExp:this.state.monthsExp,
         skillLevel:this.state.skillLevel,
         skill_name:this.state.skill_name
     };
 
     console.log("input");
     console.log(Var);

    axios.post('http://localhost:8080/CaseStudy/rest/assessment', Var)
     .then(res => {console.log(res.data); console.log(res); this.getAssessment();})

     console.log('addSkill');
     console.log(Var);
     
     this.setState({
        id:'',
        devId:'',
        monthsExp:'',
        skillLevel:'',
        skill_name:''
      });
     
    
// window.location.reload()

}



    render(){
        let getassessList = this.state.getassessList;
        
        console.log('getassessment');
        console.log(getassessList);
        

        //for dropdown skill
        let getskillList =this.state.getskillList.map((skill) =>
        <option key={skill.skill}>{skill.skill} </option>);
    
        console.log("dito");
        console.log(getskillList);

        //for dropdown devid
        let getdevList =this.state.getdevList.map((devid) =>
        <option key={devid.id}>{devid.id} </option>);

        return(
            <div className='AddAssessment'>
                    <div className="input">
                    <fieldset>
                        <legend>Add Assessment</legend>     
                    
                        Dev_id: 
                        <br></br>
                        <select min="0" required="required"name="devId" id="devId"  placeholder="Input dev_Id.." onChange={this.handleChange1}  
                        >{getdevList}
                        </select>
    
                        <br></br>
                        Skill: 
                        <br></br>
                        <select  name="skill_name" id="skill_name" placeholder="Input skill.." onChange={this.handleChange1}>{getskillList}
                        </select>

                        <br></br>
                        Months of Experience: 
                        <br></br>
                        <input type="number"  required="required" min="0" name="monthsExp" id="monthsExp" placeholder="Input months of exp.." onChange={this.handleChange1}>
                        </input>

                        <br></br>
                        Skill Level: 
                        <br></br>
                        <select required="required" name="skillLevel" id="skillLevel" onChange={this.handleChange1}>
                          <option value="0">Trained</option>
                          <option value="1">Novice</option>
                          <option value="2">Proficient</option>
                          <option value="3">Advaced</option>
                          <option value="4">Expert</option>
                          <option value="5">Thought Leader</option>
                        </select>
                     
                     <button type="submit"  className="samplebutton1" onClick={this.handleAddAssessment}>Add</button> 
                    </fieldset>

                    </div>

                    <div className='assess-list-panel'>
                    <table className='Assessmentlist'>
                        <tr>
                            <th>ID</th>
                            <th>Dev_id</th>
                            <th>Skill</th>
                            <th>Months_of_Experience</th>
                            <th>Skill_Level</th>
                        </tr>
                        <tbody>

                            {getassessList.map(assess =>{
                                return(
                                    <Assessment
                                    key={assess.id}
                                    id={assess.id}
                                    devId={assess.devId}      
                                    skill_name={assess.skill_name}
                                    monthsExp={assess.monthsExp}
                                    skillLevel={assess.skillLevel}
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

AddAssessment.propTypes = {
    getassessList: PropTypes.array,
    
} 
export default AddAssessment;