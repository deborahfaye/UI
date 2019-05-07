import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    joinedTableList,
  }from '../util/service-helper'; 
import axios from 'axios';
import SearchList from './searchlist';
import '../css/search.css';

class SearchFunc extends Component{


//for JoinedTableList
constructor(props){
    super(props);
    
    this.state={
        getjoinedtableList:[],
        firstName:"",
        lastName:"",
        skill_name:"",
        skillLevel:"",
        monthsExp:""
    };

}


componentDidMount(){
    this.getjoinedtable();
}

// get the skillslist
getjoinedtable(){
    joinedTableList().then(res =>{
        console.log("getjoinedtableList");
        console.log(res);

        this.setState({getjoinedtableList:res.data});
    })
  
}

handleChange3 = (event) => {
    this.setState({
        [event.target.name]:event.target.value
    });
}

handleSearch = () => {
  
    console.log("this.state.skill_name");
    console.log(this.state.skill_name);
    console.log("this.state.firstName");
    console.log(this.state.firstName);
    console.log("this.state.lastName");
    console.log(this.state.lastName);
 
if(this.state.skill_name !== '' && this.state.firstName === '' && this.state.lastName === '' && this.state.skillLevel === '' && this.state.monthsExp === ''){


     console.log("inputsearch");
     console.log(this.state.skill_name);

     const url = "http://localhost:8080/CaseStudy/rest/assessment/joined/filter?skill_name=" +this.state.skill_name;

    console.log("url");
    console.log(url);

     axios.get(url)
    .then(response => {
        this.setState({getjoinedtableList:response.data});


        console.log("input");
        console.log(response);
    });
    
    this.setState({
        skill_name:''
      });

}else if(this.state.skill_name === '' & this.state.firstName !== '' & this.state.lastName === ''&& this.state.skillLevel === '' && this.state.monthsExp === ''){
        
    console.log("inputsearch");
    console.log(this.state.firstName);
    console.log("inputsearch");
    console.log(this.state.lastName);
     
    const url2 = "http://localhost:8080/CaseStudy/rest/assessment/joined/filter3?firstName=" +this.state.firstName;

   console.log("url");
   console.log(url2);

    axios.get(url2)
   .then(response => {
       this.setState({getjoinedtableList:response.data});
       console.log("input");
       console.log(response);
   });
}else if(this.state.skill_name === '' & this.state.firstName === '' & this.state.lastName !== ''&& this.state.skillLevel === '' && this.state.monthsExp === ''){
        
 
    console.log("inputsearch");
    console.log(this.state.firstName);
     
    const url2 = "http://localhost:8080/CaseStudy/rest/assessment/joined/filter3?lastName=" +this.state.lastName;

   console.log("url");
   console.log(url2);

    axios.get(url2)
   .then(response => {
       this.setState({getjoinedtableList:response.data});
       console.log("input");
       console.log(response);
   });
}else if(this.state.skill_name === '' & this.state.firstName === '' & this.state.lastName === ''&& this.state.skillLevel !== '' && this.state.monthsExp === ''){
        

    console.log("inputsearch");
    console.log(this.state.skillLevel);
     
    const url2 = "http://localhost:8080/CaseStudy/rest/assessment/filter?skillLevel=" +this.state.skillLevel ;

   console.log("url");
   console.log(url2);

    axios.get(url2)
   .then(response => {
       this.setState({getjoinedtableList:response.data});
       console.log("input");
       console.log(response);
   });
}else if(this.state.skill_name === '' & this.state.firstName === '' & this.state.lastName === ''&& this.state.skillLevel === '' && this.state.monthsExp !== ''){
        

    console.log("inputsearch");
    console.log(this.state.monthsExp);
     
    const url2 = "http://localhost:8080/CaseStudy/rest/assessment/filter?monthsExp=" +this.state.monthsExp ;

   console.log("url");
   console.log(url2);

    axios.get(url2)
   .then(response => {
       this.setState({getjoinedtableList:response.data});
       console.log("input");
       console.log(response);
   });
}else if(this.state.skill_name === '' & this.state.firstName !== '' & this.state.lastName !== ''&& this.state.skillLevel === '' && this.state.monthsExp === ''){
        
    console.log("inputsearch");
    console.log(this.state.firstName);
    console.log("inputsearch");
    console.log(this.state.lastName);
     
    const url2 = "http://localhost:8080/CaseStudy/rest/assessment/joined/filter2?firstName=" +this.state.firstName +"&lastName="+this.state.lastName;

   console.log("url");
   console.log(url2);

    axios.get(url2)
   .then(response => {
       this.setState({getjoinedtableList:response.data});
       console.log("input");
       console.log(response);
   });
}
else if(this.state.skill_name === '' & this.state.firstName === '' & this.state.lastName === ''&& this.state.skillLevel !== '' && this.state.monthsExp !== ''){
        
    console.log("inputsearch");
    console.log(this.state.firstName);
    console.log("inputsearch");
    console.log(this.state.lastName);
     
    const url2 = "http://localhost:8080/CaseStudy/rest/assessment/filter2?skillLevel=" +this.state.skillLevel +"&monthsExp="+this.state.monthsExp;

   console.log("url");
   console.log(url2);

    axios.get(url2)
   .then(response => {
       this.setState({getjoinedtableList:response.data});
       console.log("input");
       console.log(response);
   });
}
else{
    if(this.state.skill_name === '' & this.state.firstName === '' & this.state.lastName !== ''&& this.state.skillLevel === '' && this.state.monthsExp === ''){
        alert("Input a lastName");
    } else  if(this.state.skill_name === '' & this.state.firstName !== '' & this.state.lastName === ''&& this.state.skillLevel === '' && this.state.monthsExp === ''){
        alert("Input a lastName");
    }
    this.getjoinedtable();
}

}


    render(){

        let getjoinedtableList = this.state.getjoinedtableList;
        console.log("hello world");
        console.log(getjoinedtableList);
    
        return(
            <div className='Search'>
                 <div className='searchinput'>
                 <input type="text" name="skill_name" id="skill_name"  placeholder="Input a skill.." onChange={this.handleChange3}>
                 </input>
                 <input type="text" name="firstName" id="firstName"  placeholder="Input a firstname.." onChange={this.handleChange3}>
                 </input>
                 <input type="text" name="lastName" id="lastName" placeholder="Input a lastname.." onChange={this.handleChange3}>
                 </input>
                 <input type="number" min='0' name="skillLevel" id="skillLevel" placeholder="Input a skillLevel.." onChange={this.handleChange3}>
                 </input>
                 <input type="number" min='0' name="monthsExp" id="monthsExp" placeholder="Input a monthsExp.." onChange={this.handleChange3}>
                 </input>
                 <button type="submit"  className="searchbutton" onClick={this.handleSearch}>Search</button> 
                 </div>

                  
                 <div className='search-list-panel'> 
                      <table className='devlist1'>
                        <tr>
                        <th>DevId</th>   
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Skill</th>
                        <th>SkillLevel</th>
                        <th>MonthsExp</th>
                        </tr>
                        <tbody>
                       
                        {getjoinedtableList.map(join => {
                            return (
                                    <SearchList 
                                        devId={join.devId} 
                                        firstName={join.firstName}  
                                        lastName={join.lastName}
                                        skill_name={join.skill_name}
                                        skillLevel={join.skillLevel}
                                        monthsExp={join.monthsExp}
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
SearchFunc.propTypes = {
     getjoinedtableList: PropTypes.array,
    
} 
export default SearchFunc;