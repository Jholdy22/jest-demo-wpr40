const axios = require('axios');

module.exports = {
  nameValidation: (val) => {
    if (!val){
      return ''
    }
    let firstLetter = val[0]
    let upperCase = firstLetter.toUpperCase();
    if (firstLetter === upperCase) {
      return val
    }
  }, 
  getPeopleRequest: () => {
    return axios.get('https://swapi.co/api/people/1')
    .then(res => {
      console.log('first .then', res.data)
      return res.data
    })
    
  }
}