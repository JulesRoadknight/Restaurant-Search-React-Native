import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer HpwvkzTbtpUOtSK38u5F3P_TZVRhNioYnCpnPB1eR3NhSDhipFFFA4Fszu99C65c6yuxGlok3iV13kKJbFndtFBCCQWHq9qzvUNWQekLiVleDNrPuE1ZorCa_APFXnYx'
  }
});