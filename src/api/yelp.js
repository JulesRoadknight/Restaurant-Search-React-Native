import axios from 'axios';

const config = require('../config');

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer ' + config.authorization
  }
});