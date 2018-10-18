

const number = [ 'one', 'two', 'three', 'four']

number[1] ='Something';
console.log(number);

console.log("the element to be deleted is : " +number.pop());
console.log(number);

number.splice(2, 2, 'something');
console.log(number);