import {skillListURL,  devListURL} from './service-url';
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
