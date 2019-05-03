import React,{Component} from 'react';
import '../css/modal.css';
import Assessment from './assessment';
import {
    skillList,
    devList
  }from '../util/service-helper'; 
  import axios from 'axios';
// import 'bootstrap/dist/js/bootstrap.min.js';
// // Styles
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class Modal extends Component{
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

    
// componentDidMount(){
//     this.getskillLists1();
//     this.getdevLists1();
// }
//     // get the skillslist
// getskillLists1(){
//     skillList().then(res =>{
//         this.setState({getskillList:res.data});
//     })
// }

// // get the developers list
// getdevLists1(){
//     devList().then(res =>{
//         this.setState({getdevList:res.data});
//     })
// }
//sets the input field on
on = () => {
    this.setState({
        isVisible:true
    });
}

// //sets the input field off
// off = () => {
//     this.setState({
//         isVisible:false
//     });
// }
// //uopdate the data in the form
// handleUpdate12 = (event) => {
//     this.setState({
//         [event.target.name]:event.target.value
//     });
// }

// //to update data
// handleSaveUpdate = (event) => {
//     const Var={
//       id:this.state.id
//     };
    
//     const UpdateData={
//         devId:this.state.devId,
//         monthsExp:this.state.monthsExp,
//         skillLevel:this.state.skillLevel,
//         skill_name:this.state.skill_name
//     }
//     console.log("input");
//     console.log(Var);

//     const updateurl = 'http://localhost:8080/CaseStudy/rest/assessment/' + this.state.id;

//     console.log("input");
//     console.log(updateurl);

//    axios.put(updateurl, UpdateData)
//     .then(res => {console.log("saved data");console.log(res); })

//      console.log('addSkill');
//      console.log(UpdateData);
    
//      alert("Assessment Updated");
// }

render(){

    //  //for dropdown skill
    //  let getskillList =this.state.getskillList.map((skill) =>
    //  <option key={skill.skill}>{skill.skill} </option>);

    //  console.log("dito");
    //  console.log(getskillList);

    //  //for dropdown devid
    //  let getdevList =this.state.getdevList.map((devid) =>
    //  <option key={devid.id}>{devid.id} </option>);
    return(
       <div >{this.state.isVisible ?
           <span>Print mo to</span>
           :null }
       </div>
        // <div>{this.state.isVisible ?
        //     <div className="modal-content">
        //      <div className="modal-body">
        //          <p><span className="modal-lable">DevId:</span><br></br><select name="devId" value={this.props.devId} onChange={this.handleUpdate12}>{getdevList}</select>
        //          <span className="modal-lable">Skill:</span><br></br><select name="skill_name" value={this.props.skill_name} onChange={this.handleUpdate12}>{getskillList}</select>
        //          <span className="modal-lable">Months_Exp:</span><br></br><input name="monthsExp"value={this.props.monthsExp} onChange={this.handleUpdate12} />
        //          <span className="modal-lable">Skill_Level:</span><br></br><select name="skillLevel" value={this.props.skillLevel} onChange={this.handleUpdate12}> 
        //              <option value="0">0-Trained</option>
        //              <option value="1">1-Novice</option>
        //              <option value="2">2-Proficient</option>
        //              <option value="3">3-Advaced</option>
        //              <option value="4">4-Expert</option>
        //              <option value="5">5-Thought Leader</option></select></p>
        //          </div>
        //      <div className="modal-footer">
        //          <div className='button1'>
        //          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.off}>Close</button>
        //          </div>
        //          <div className='button2'>
        //          <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSaveUpdate}>Save changes</button>
        //          </div>
        //      </div>
        //      </div>
        //          :null }
        //      </div>
     
    );
}

}

export default Modal;