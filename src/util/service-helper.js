import {skillListURL, addSkillURL} from './service-url';
import axios from 'axios';

// get Skill
const skillList = () => {
    return axios.get(skillListURL);
}

export {
    skillList
}

