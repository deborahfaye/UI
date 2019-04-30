import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Assessment from './assessment';
import '../css/addassessment.css'
import {
    assessList,
  }from '../util/service-helper'; 
// import axios from 'axios';

class AddAssessment extends Component{

//for AssessmentList
constructor(props){
    super(props);

    this.state={
        getassessList:[],
        ID:"",
        Dev_id:"",
        Skill_id:"",
        monthsExp:"",
        skillLevel:""
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

//post
// handleChange = (event) => {
//     this.setState({
//         [event.target.name]:even
//     });
// }



    render(){
        let getassessList = this.state.getassessList;
        
        console.log('getassessment');
        console.log(getassessList);

        return(
            <div className='AddAssessment'>


                    <div className='assess-list-panel'>
                    <table className='Assessmentlist'>
                        <tr>
                            <th>ID</th>
                            <th>Dev_id</th>
                            <th>Skill_id</th>
                            <th>Months of Experience</th>
                            <th>Skill Level</th>
                        </tr>
                        <tbody>

                            {getassessList.map(assess =>{
                                return(
                                    <Assessment
                                    key={assess.id}
                                    id={assess.id}
                                    devId={assess.devId}
                                    skillId={assess.skillId}
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