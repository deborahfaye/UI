import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    assessList,
  }from '../util/service-helper'; 
import axios from 'axios';
import Assessment from './assessment';

class Search extends Component{
//for Search
constructor(props){
    super(props);

    this.state={
        getassessList:[],
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
}


getAssessment(){
    assessList().then(res => {
        this.setState({getassessList:res.data});
    })
}

    render(){
      
    let getassessList = this.state.getassessList;
        
        // //for dropdown skill
        // let getassessList =this.state.getassessList.map((skill) =>
        // <li key={skill._name}>
        // {skill.skill_name} 
        // {skill.skill_Level}
        // </li>
        // );
    
        return(
            <div className='Search'>

                    <div className='assess-list-panel'>
                    <table className='Assessmentlist'>
                        <tr>
                            <th>Skill</th>
                            <th>0-Trained</th>
                            <th>1-Novice</th>
                            <th>2-Proficient</th>
                            <th>3-Advanced</th>
                            <th>4-Expert</th>
                            <th>5-Thought Leader</th>
                        </tr>
                        <tbody>

                            {getassessList.map(new1 =>{
                                return(
                                    <Assessment
                                    key={new1.id}    
                                    skill_name={new1.skill_name}
                                    // monthsExp={assess.monthsExp}
                                     skillLevel={new1.skillLevel}
                                    
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
Search.propTypes = {
    getassessList: PropTypes.array,
    
} 
export default Search;