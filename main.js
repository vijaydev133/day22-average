
let numbers = prompt("enter number of numbers : ")
let numArray = []
let num = 0;
let avg = 0;
let sum = 0;

for(let i = 1; i <= numbers; i++){
     num = prompt(`Enter number${i}`)
     numArray.push(num);
}


numArray.forEach((e)=> {
    console.log(e);
    sum = sum + parseInt(e) ;
});
console.log(sum);
avg = sum / numbers;

console.log(avg);
