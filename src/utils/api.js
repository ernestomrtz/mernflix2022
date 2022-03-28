import axios from 'axios';
import config from '../config.js';

export default axios.create({
  baseURL: 'https://mernflixback.herokuapp.com/'
  //baseURL: config.baseURL_API
});
