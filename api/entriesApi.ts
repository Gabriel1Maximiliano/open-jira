import axios from 'axios';


const url = process.env.HOST_NAME;
console.log(url)
 const entriesApi = axios.create({
    baseURL:'/api'
});


export default entriesApi;
  

