import {projects} from '../contants/portfolio'

export const getRandomProjects = (n) => {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, n);
  }