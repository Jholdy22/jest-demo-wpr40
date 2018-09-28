const funcs = require('./utilities/app-methods');

describe('nameValidation method', ()=> {
  test('should return an emptry string when passed a falsy value', ()=>{
    let result = funcs.nameValidation();
    expect(result).toBe('');
  })
})

describe('getPeopleRequest method', ()=> {
  test('should return a person obj', () => {
    return funcs.getPeopleRequest()
    .then(res => {
      expect(res.name).toBe('Luke Skywalker')
    })
  })
})