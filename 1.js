//print odd numbers in an array
let n = [1,2,3,4,5,6,7,8,9,10];

function odd(){
    let odds = n. filter(n => n%2)
console. log(odds)
}
odd();

//convert all the strings to title caps in a string array
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  console.log(titleCase("FULL StaCK Developer"));

//Sum of all the numbers in an array

let m=[1,2,3,4,5,6,7,8,9,10];

function sum(){
    var s=0;
    for(let i=0; i<m.length; i++){
    s=s+m[i];
    }
    console.log(s);
}
sum();

//Return all the prime numbers in an array
const array = [-5, -3, -2, -1, ...Array(20).keys()]; 

function isPrime(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); 

//Return all palindromes in an array
let p = [121,"civic","oppo",1234,"raja"]

function isPalindrome(){
    
var arr = [];
var str = p.slice(0);
var pal = str.toString().split("").reverse().join("").split(",");

for (let i = 0; i < p.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (p[i] == pal[k]) {
      arr.push(p[i])
    }
  }
}
console.log(arr);
}
isPalindrome();

//Return median of two sorted arrays of the same size
let a = [0,2,3,5,9];
let b = [1,4,6,8,7];

function median(){
    let x = a.concat(b);
    x.sort(function (a, b)
    {
        return a- b;
    });

    let len = x.length;

    return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];

}
console.log(median());

//Remove duplicates from an array
var arr = ["apple", "mango", "apple",
"orange", "mango", "mango"];

function removeDuplicates() {
return [...new Set(arr)];
}

console.log(removeDuplicates());

//rotate an array by k times 
function rotateCalendar(){
    var cal=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    cal=cal.concat(cal.splice(0,new Date().getMonth()));
    console.log(cal);
}
rotateCalendar();