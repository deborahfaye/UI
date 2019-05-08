import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/assessment.css';
import {
    skillList,
    devList
  }from '../util/service-helper'; 
  import axios from 'axios';



class Assessment extends Component{

//for AssessmentList
constructor(props){
    super(props);
    
    this.state={
        getskillList:[],
        getdevList:[],
        id:props.id,
        devId:props.devId,
        monthsExp:props.monthsExp,
        skillLevel:props.skillLevel,
        skill_name:props.skill_name,
        isVisible:false
    };

}


componentDidMount(){
    this.getskillLists1();
    this.getdevLists1();
}
 
//sets the input field on
on =()=> {
    this.setState({
        isVisible:true
    });
}


//update the data in the form
handleUpdate12 = (event) => {
    this.setState({
        [event.target.name]:event.target.value
    });
}

// get the skillslist
getskillLists1(){
    skillList().then(res =>{
        this.setState({getskillList:res.data});
    })
}

// get the developers list
getdevLists1(){
    devList().then(res =>{
        this.setState({getdevList:res.data});
    })
}

//to update data
handleSaveUpdate = (event) => {
    const Var={
      id:this.state.id
    };
    
    const UpdateData={
        devId:this.state.devId,
        monthsExp:this.state.monthsExp,
        skillLevel:this.state.skillLevel,
        skill_name:this.state.skill_name
    }

    console.log("input");
    console.log(Var);

    const updateurl = 'http://localhost:8080/CaseStudy/rest/assessment/' + this.state.id;

    console.log("input");
    console.log(updateurl);

   axios.put(updateurl, UpdateData)
    .then(res => {console.log("saved data");console.log(res); })

     console.log('addSkill');
     console.log(UpdateData);

     this.setState({
        isVisible:false
    });


}



    render(){
            //for dropdown skill
            let getskillList =this.state.getskillList.map((skill) =>
            <option key={skill.skill}>{skill.skill} </option>);

            console.log("dito");
            console.log(getskillList);

            //for dropdown devid
            let getdevList =this.state.getdevList.map((devid) =>
            <option key={devid.id}>{devid.id} </option>);

        return(      

                <tr>
                <td>{this.state.id}</td>
                <td>{this.state.devId}</td>
                <td>{this.state.skill_name}</td>
                <td>{this.state.monthsExp}</td>
                <td>{this.state.skillLevel}</td>
                <th><button type="submit" value='' className="update" onClick={this.on} >Update</button>
                    <div className="UpdateFeild">{this.state.isVisible ?
                       <div className="modal-content">
                        <div className="modal-body">
                            <p><span className="modal-lable">DevId:</span><br></br><select name="devId" value={this.state.devId} onChange={this.handleUpdate12}>{getdevList}</select>
                            <span className="modal-lable">Skill:</span><br></br><select name="skill_name" value={this.state.skill_name} onChange={this.handleUpdate12}>{getskillList}</select>
                            <span className="modal-lable">Months_Exp:</span><br></br><input name="monthsExp"value={this.state.monthsExp} onChange={this.handleUpdate12} />
                            <span className="modal-lable">Skill_Level:</span><br></br><select name="skillLevel" value={this.state.skillLevel} onChange={this.handleUpdate12}> 
                                <option value="0">0-Trained</option>
                                <option value="1">1-Novice</option>
                                <option value="2">2-Proficient</option>
                                <option value="3">3-Advaced</option>
                                <option value="4">4-Expert</option>
                                <option value="5">5-Thought Leader</option></select></p>
                            </div>
                        <div className="modal-footer">
                            <div className='button2'>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSaveUpdate}>Save changes</button>
                            </div>
                        </div>
                        </div>
                            :null }
                        </div>
                </th> 
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
    openForm:PropTypes.func,
    on:PropTypes.func,
}

export default Assessment;