// ------------------------------------------------algoritthms------------------------------------------------
// is this a triangle?
function isTriangle(a, b, c) {
  return (
    a > 0 && b > 0 && c > 0 &&
    a + b > c &&
    a + c > b &&
    b + c > a
  );
}
// find divisors
function divisors(integer) {
    let result = [];
  for( let i=2 ; i <integer ; i++){
    if (integer % i === 0) { 
      result.push(i);
    }
  }

  return result.length? result : `${integer} is prime`;

}

// ------------------------------------------------------------------data type==------------------------------------------------
// convert numberToString
function numberToString(num) {
  let string=num.toString();
   return string
}

// Return negative
function makeNegative(num) {
 return num>0 ? num*(-1) : num ;
}

//--------------------------------------------------------------------number-----------------------------------------------------
// Sum of the first nth term of Series
function SeriesSum(n) {
  let result=0;
  let denominateur = 1;
  for(let i=0; i<n;i++){
     result += 1/denominateur;
    denominateur +=3;
  }
  return result.toFixed(2);

  // Happy Coding ^_^
}



// Basic Mathematical Operations
function basicOp(operation, value1, value2){
 switch (operation) {
    case '+': return value1 + value2;
    case '-': return value1 - value2;
    case '*': return value1 * value2;
    case '/': return value1 / value2;
    default: throw new Error("Opération non valide");
     }
}

//----------------------------------------------------------string-------------------------------------------------------------
// Reversed Strings
function solution(str){
  let arrayStr = str.split('');
  let reverseStr= arrayStr.reverse();
  return  reverseStr.join("");
}


// stringEndsWith?
const solution = (str, ending) => str.endsWith(ending);

//-------------------------------------------------------- array----------------------------------------------------------------

// Counting sheep...
function countSheeps(sheep) {
  let count=0
  for(let i =0; i<sheep.length;i++){
 (sheep[i]=== true)? count+=1 :count;
  }
  return count;

}

// Convert number to reversed array of digits

function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}

// Object
// Regular Ball Super Ball
var Ball = function(ballType) {
  this.ballType = ballType || "regular";
};


// Make a function that does arithmetic!

function arithmetic(a, b, operator) {
  const operations = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b
  };
  return operations[operator];
}


//----------------------------------------------- basic language features
// Count the Monkeys!
function monkeyCount(n) {
 let monkeys = [];
 for(var i=1; i<n+1; i++){
   monkeys.push(i);
 }
 return monkeys;
}

// function 1-helloWorld
function greet() {
  return String.fromCharCode(
    104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33
  );
}

// conditional Statements (control flow)

// Switch/Case - Bug Fixing #6

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': return value.a + value.b;
    case'-': return  value.a - value.b;
    case'/': return value.a / value.b;
    case'*': return value.a * value.b;
    case'%': return value.a % value.b;
    case'^': return Math.pow(value.a, value.b);
  }
  return result;
}


// Leonardo Dicaprio and Oscars

function leo(oscar){

return  (oscar===88) ? "Leo finally won the oscar! Leo is happy": oscar > 88?"Leo got one already!": oscar===86 ? "Not even for Wolf of wallstreet?!": "When will you give Leo an Oscar?"; 
}


// ----------------------------------------------------------loops-------------------------------------------------

// sentece smash 
function smash (words) {
  
   return words.join(" ");
};

// unfinished Loop
function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}

//------------------------------------------------------------------------------------------changing gear--------------------------------------------------------------

// Multiples of 3 or 5

function solution(number) {
  if (number <= 0) return 0; 

  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i; 
    }
  }
  return sum;
}





// Who likes it?
function likes(names) {
  return names.length === 0 ? "no one likes this" :
         names.length === 1 ? `${names[0]} likes this` :
         names.length === 2 ? `${names[0]} and ${names[1]} like this` :
         names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
         `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
 
