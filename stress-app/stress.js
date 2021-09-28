const axios = require('axios');

// axios.get('http://localhost:3000').then(resp => console.log(resp.data)); 

for (let index = 0; index < 1000; index++) {
  axios.get('http://localhost:3000')
    .then(resp => console.log(resp.data))  
    .catch(err => console.log(err))
}