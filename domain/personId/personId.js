var Person = require('../person/person.js')

class PersonId extends Person{
  constructor(...args){
    super(...args);
  }

  getId(){
    var id = this.nik;
    var lengthOfId = id.length;
    if(lengthOfId === 16){
      return `Id Valid berjumlah ${lengthOfId}`
    }else{
      return `Id Tidak Valid Karena Berjumlah ${lengthOfId}`
    }
  }
  checkBodId(){
    var date = this.bod.substring(8,10)
    var month = this.bod.substring(5,7)
    var year = this.bod.substring(2,4)
    var dateOfBirth = date+month+year
    var dateOfId = this.nik.substring(6,12)

    if(dateOfBirth === dateOfId){
      return "Tanggal Lahir Valid"
    }else{
      return "Tanggal Lahir Tidak Valid"
    }
  }
}

module.exports = PersonId;