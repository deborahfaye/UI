import {skillListURL,  devListURL, assessListURL} from './service-url';
import axios from 'axios';

// get Skill
const skillList = () => {
    return axios.get(skillListURL);
}

export {
    skillList
}


//get Dev
const devList = () => {
    return axios.get(devListURL);
}

export{
    devList
}


//get assessment
const assessList = () => {
    return axios.get(assessListURL);
}

export {
    assessList
}