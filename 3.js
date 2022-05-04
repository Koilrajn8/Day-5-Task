//Print odd numbers in an array
let n=[1,2,3,4,5,6,7,8,9,10];

let odd = () => {
    let odds = n.filter(n => n%2)
    console.log(odds);
}
odd();

//Convert all the strings to title caps in a string array
let titleCase= (str)=> {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  console.log(titleCase("FULL StaCK Developer"));

//Sum of all numbers in an array
let m=[1,2,3,4,5,6,7,8,9,10];

let sum=()=>{
    var s=0;
    for(let i=0; i<m.length; i++){
    s=s+m[i];
    }
    console.log(s);
}
sum();

//Return all the prime numbers in an array
const array = [-5, -3, -2, -1, ...Array(20).keys()]; 

 let isPrime=(num)=> {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); 

//Return all the palindromes in an array
let p = [121,"civic","oppo",1234,"raja"]

let isPalindrome=()=>{
    
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
