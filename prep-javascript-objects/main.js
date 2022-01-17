const person = {
  firstName: 'Euichang',
  lastName: 'Park',
  hobby: 'Playing video games'
};

const fullName = person.firstName + ' ' + person.lastName;
person.job = 'Student';
person.previousJob = 'No job';

console.log(person);
console.log("The person's name is: " + fullName);
console.log("The person's current job is: " + person.job);
console.log("The person's previous job is: " + person.previousJob);
console.log(person);
