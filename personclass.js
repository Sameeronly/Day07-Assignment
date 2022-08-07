
 /* First method to create a classe */
 
 var Person = function (firstname, lastname, age) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
    
    this.setAge = function (age) {
      this.age = age;
    };
    
    this.toString = function () {
      return ["Hi ! I'm ", this.firstName, " ", this.lastName, " and I'm ", this.age, " year old."].join("");
    };
  };
  
  var yann = new Person("Yannick", "Comte", 28);
  console.log(yann.toString());
  
  
   /* Second method to create a classe */
  
  var Person = function (firstname, lastname, age) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
  };
  
  // Prototypes are better for performances if you have many call of this method
  Person.prototype.setAge = function (age) {
    this.age = age;
  };
  
  Person.prototype.toString = function () {
    return ["Hi ! I'm ", this.firstName, " ", this.lastName, " and I'm ", this.age, " year old."].join("");
  };
  
  var yann = new Person("Yannick", "Comte", 28);
  console.log(yann.toString());
  
  
  /*          Inheritance            */
  var Developer = function (firstname, lastname, age, skills) {
    Person.call(this, firstname, lastname, age);
    this.skills = skills;
  };
  
  Developer.prototype.setAge = function (age) {
    Person.prototype.setAge.call(this, age); // Super(age)
  }
  
  Developer.prototype.toString = function () {
    return ["Hi ! I'm ", this.firstName, " ", this.lastName, " and I'm ", this.age, " year old and I'm a developer with a skill level of ", this.skills].join("");
  };
  
  
  
   /*     Private attributes and functions    */
   
  var Person = function (firstname, lastname, age) {
    // Private because of var keyword
    var _firstName = firstname;
    var _lastName = lastname;
    var _age = age;
    
    // Public because of this keyword
    this.setAge = function (age) {
      _age = age;
    };
    
    this.getAge = function () {
     return _age;
    };
    
    var getToStringValue = function () {
     return ["Hi ! I'm ", _firstName, " ", _lastName, " and I'm ", _age, " year old."].join("");
    };
    
    this.toString = function () {
      return getToStringValue();
    };
  };
  
  var yann = new Person("Yannick", "Comte", 0);
  yann.setAge(28);
  yann._age = 45; // Add a property "_age" to the object, not changing the private "_age" variable !
  yann.getToStringValue(); // Doesn't work because it's private !
  yann.toString(); // It's good because it's public ;)