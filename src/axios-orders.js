import axios from 'axios';

 const instance = axios.create({
   baseURL: "https://react-redux-burgerbuilder.firebaseio.com/"
 });

 export default instance; 