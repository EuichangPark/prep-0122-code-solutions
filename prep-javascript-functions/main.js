function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}

const greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

const multipled5 = addAndMultiplyBy5(10, 5);
console.log(multipled5);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

const dividedBy5 = multiplyAndDivideBy5(35, 10);
console.log(dividedBy5);

function subtractTwoNumbers(x, y) {
  return x - y;
}

const subtraction = subtractTwoNumbers(22, 7);
console.log(subtraction);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

const circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return number ** 2;
}

const cubedNumber = cube(5);
console.log(cubedNumber);
