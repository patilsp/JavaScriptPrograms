// const days = ['Mon', 'Tue', 'Wed', 'Thr','Fri','Sat','Sun']
// console.log(days[0]);

// days.forEach(function (day, index){
//     console.log(`Satrts with ${index+1} --${day}`);

// })

// for (let index = days.lenth -1; index >=0; index--)
// {
// console.log(days[index]);
// }

const myTodos = []

myTodos.push('buy Beer')
myTodos.push('learn to code daily')
myTodos.push('Go to gym')

myTodos.forEach(function(todo, index ){
    console.log(`My Daily tasksnno. ${index + 1} is : ${todo}`);
})



