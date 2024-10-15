console.log("Task 5");
console.log("hello my name is Zulkhairova Moldir! I live in Astana for 3 years");
console.log("Task 6");

let age = 18;
console.log(`I am ${age} years old`);

let city = "Ust-Kamenogorsk";
console.log(`I was born in the city of ${city}`);

let bool = true;
console.log(`The fact that I graduated music school is ${bool}`);

console.log("Task 7");
let x = prompt("Input x:");
let y = prompt("Input y:");
let result = parseInt(x)+parseInt(y) ;
 document.getElementById("Pi1").textContent = `${result}`
 const d = new Date();
 document.getElementById("date").innerHTML = d;

 // Task 9
 function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return year + ' is a leap year';
    } else {
        return year + ' is not a leap year';
    }
}

const year = prompt('Enter a year:');
document.getElementById("leap").textContent = checkLeapYear(year);

//Task 10

function multiply() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = num1 * num2;
    document.getElementById("result").textContent = result;
}

function divide() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    if (num2 != 0) {
        const result = num1 / num2;
        document.getElementById("result").textContent = result;
    } else {
        document.getElementById("result").textContent = "Cannot divide by 0";
    }
}

//Task 11
 
const celsius =parseFloat(prompt("Enter a celsius value: "));
const fahrenheit =parseFloat(prompt("Enter a fahrenheit value: "));

const fahrenheitRes = ((celsius* 9.0 / 5.0) + 32.0);
const celsiusRes = ((fahrenheit - 32.0) * 5.0 / 9.0);

document.getElementById("celsiusToFahrenheit").textContent = `${celsius}°C is ${fahrenheitRes}°F`;
document.getElementById("fahrenheitToCelsius").textContent = `${fahrenheit}°F is ${celsiusRes}°C`;

//Task12

const check =parseFloat(prompt("Enter a value for checking (add or even): "));

function evenOrOdd(value){
    if (check % 2 == 0)
     document.getElementById("even").textContent = `${value} is even`;

  else {
    document.getElementById("even").textContent = `${value} is odd`;
  }
}
evenOrOdd(check);

//Task 13

function largest() {
    
    const a = Number(document.getElementById("v1").value);
    const b = Number(document.getElementById("v2").value);
    const c = Number(document.getElementById("v3").value);


    if (a > b && a > c) {
        document.getElementById("r").textContent = `${a} is the largest`;
    } else if (b > a && b > c) {
        document.getElementById("r").textContent = `${b} is the largest`;
    } else {
        document.getElementById("r").textContent = `${c} is the largest`;
    }
}

function less() {
    const a = Number(document.getElementById("v1").value);
    const b = Number(document.getElementById("v2").value);
    const c = Number(document.getElementById("v3").value);

    if (a < b && a < c) {
        document.getElementById("r").textContent = `${a} is the smallest`;
    } else if (b < a && b < c) {
        document.getElementById("r").textContent = `${b} is the smallest`;
    } else {
        document.getElementById("r").textContent = `${c} is the smallest`;
    }
}

//Task14

function heron(){

    const h1 = parseFloat(document.getElementById('A').value);
    const h2 = parseFloat(document.getElementById('B').value);
    const h3 = parseFloat(document.getElementById('C').value);

    const hs = (h1 + h2 + h3) / 2; 
    const area = Math.sqrt(hs * (hs - h1) * (hs - h2) * (hs - h3));

    document.getElementById('heronResult').innerHTML = `The area of the triangle is: ${area}`;
}

//Task15
 
function factorial(n){
    if (n < 0) {
        return "Отрицательное число ";
    }
    
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(" Task 15");

console.log(factorial(5));

//Task 16

function countVowelsAndConsonants(str) {
    str = str.toLowerCase();  
    const vowels = 'aeiou';   
    let vowelCount = 0;
    let consonantCount = 0;

    
    for (let char of str) {
        if (/[a-z]/.test(char)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

console.log(countVowelsAndConsonants("Hello world")); 

//Task17

function convert() {
    const seconds = parseFloat(document.getElementById('second').value);

    let minutes = 0;
    let hours = 0;

     
        if (seconds >= 60) {
            minutes = seconds / 60;

            if (minutes >= 60) {
                hours = minutes / 60;
            }
        }

        document.getElementById('hourAndMin').textContent = `Seconds: ${seconds}, Minutes: ${minutes.toFixed(4)}, Hours: ${hours.toFixed(4)}`;
  
}

//Task 18

function findMostFrequent() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number);

    const frequencyMap = {}; 
    let mostFrequent = array[0]; 
    let maxCount = 0; 

            
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (frequencyMap[num]) {
            frequencyMap[num]++;
         } else {
         frequencyMap[num] = 1;
         }

                
        if (frequencyMap[num] > maxCount) {
              mostFrequent = num;
              maxCount = frequencyMap[num];
            }
         }

            
            document.getElementById('max').textContent = `Наиболее частое число: ${mostFrequent} (встречается ${maxCount} раз)`;

}

//Task 19

function fibonacci(num) 
{ 
    var num1 = 0; 
    var num2 = 1; 
    var sum; 
    var i = 0; 
    for (i = 0; i < num; i++)  
    { 
        sum = num1 + num2; 
        num1 = num2; 
        num2 = sum; 
    } 
    return num2; 
} 

console.log(" Task 19");
console.log(fibonacci(1));
console.log(fibonacci(12));

//Task 20

today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
  if (today.getMonth()==11 && today.getDate()>25) 
  {
    cmas.setFullYear(cmas.getFullYear()+1); 
  }  
var one_day=1000*60*60*24;

console.log(" Task 20");
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");



