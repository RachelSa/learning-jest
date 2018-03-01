class Person {
  constructor(name, phone, greeting){
    this.name = name
    this.digits = phone
    this.greeting = greeting
  }

  getContactInfo(){
    let p = {}
    p.num = this.digits
    p.name = this.name
    return p
  }

  sayHello(){
    return this.greeting
  }
}

module.exports = Person
