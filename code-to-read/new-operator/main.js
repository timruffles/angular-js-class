var app = angular.module("exercise",[]);


function User(name) {
  console.log("User",this.location);
  this.name = name;
}
User.prototype.age = 0;
User();

console.log(this.location);

var user = new User("bob");
console.log(user.name,user,user.age)

function newOperator(constructor) {
  var object = Object.create(constructor.prototype);
  constructor.apply(object,[].slice.call(arguments,1));
}