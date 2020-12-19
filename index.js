var Person = require('./domain/person/person.js')
var Age = require('./domain/personAge/personAge.js')

var person1 = new Person('Naufal', '3277011507910001', '1991-07-15');
  if (person1.getWeekType() === 'Weekday' || person1.getWeekType() === 'Weekend') {
    console.log(`${person1.name} lahir pada tipe minggu ${person1.getWeekType()}`)
  } else {
    console.log(`Tanggal lahir ${person1.name} bermasalah`)  
  }
  console.log(`Saat ini berumur ${person1.getAge()}`)

  var age1 = new Age('Naufal', '3277011507910001', '1991-07-15');
  console.log(`Merupakan seorang ${age1.personByAge()}`)

  