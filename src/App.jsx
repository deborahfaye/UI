import React, { Component } from 'react';
import './App.css';
import {Header, Header2 } from './components/header.jsx';
import {Body, Body2} from './components/body.jsx';
import Footer from './components/footer.jsx';
// import AddSkills from './components/addskill.jsx';
// import {
//   skillList,
//   // addskill
// }from './util/service-helper'; 
//  import axios from 'axios';
// import 'bootstrap/dist/bootstrap.min';
// Styles



class App extends Component {

// // for skilllist  
//   constructor(props){
//     super(props);
  
//     this.state={
//       getskillList:[],
//       skill_type:''
//     };
//     // this.handleChange = this.handleChange.bind(this);
//   }

// componentDidMount(){
//   this.getSkills();
// }

// getSkills(){
//   skillList().then(res =>{
//     console.log('res');
//     console.log(res);
    
//     this.setState({getskillList:res.data});
//   })
// }

// handleChange = (event) =>{
//   this.setState({
//       skill_type: event.target.value
      
//   });
// }


// handleAddSkill2 = (event) => {
//   event.preventDefault();

  
//   const addSkill=this.state.skill_type;
     
//   axios.post('http://localhost:8080/CaseStudy/rest/skills', addSkill).then(res => {console.log(res.data);console.log(res); })
   
//   console.log('addSkill');
//   console.log(addSkill);

//   this.setState({
//      skill_type:''
//    });

  
// }

// handleAddSkill = (event) => {
//   event.preventDefault();

//   let addSkill = this.state.addSkill;
//   let getskillList =[...this.state.getskillList];

//   getskillList.push(addSkill);

//   this.setState({getskillList: getskillList});
//   console.log('getSkillList');
//   console.log(getskillList);

 
// }



  render() {
    return (
<div className='my-app'>    
       <Header/>
       
       <Header2/>

       <Body/>

       <Body2
      />
      
       <Footer/>
</div>
    );
  }
}
export default App;
