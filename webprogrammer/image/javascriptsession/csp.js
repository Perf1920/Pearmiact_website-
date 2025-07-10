let students  = [
["perfect",76,80,65],
["Ayanda",45,50,55],
["lebogo",90,86,99]
];


for (let i = 0 ; i < students.length; i++) {
    console.log(students[i][0])
    for (let j = 0 ; j< students[i].length; j++) {
        console.log(students[i][j]);
        
    
      
    }
    
}

let studentAttendance =[
    ["perfect","Monday :present","Tuesday : present","Wednesday: present"],
    ["Ayanda","Monday :present","Tuesday : present","Wednesday :present"],
    ["lebo","Monday :present","Tuesday : present","Wednesday :present"]

];
for (let i = 0; i < studentAttendance.length; i++) {
    console.log(studentAttendance[i][0]);
    for (let j= 0; j< studentAttendance.length; j++) {
        console.log(studentAttendance[i][j]);
        
    }
    
}

function productNum(num1,num2){
    return num1 * num2;

    
}
productNum(3,4)
 
function userInput(callback) {
    const name  = "Lethabo";
    callback(name);
}
    userInput(function (name){
        console.log("welcome")
        
    });

function repeat(action,times ) {
    for (let i = 0; i < times; i++) {
        action();
        
    }
    
};
repeat(() => console.log("Boom"), 3);

function multiplier(factor) {
    return function(num){
        return num * factor;
    };
    
}

const  triple =  multiplier(3);
console.log(triple(6));


function userName(name){
    return function (age) {
        return name ,age;
        
    }

}
const   greetUser = userName("perfect",19);
console.log(greetUser("Hi"));

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

const person = {
  name: "Perfect",
  greet() {
    console.log(`Hi, I’m ${this.name}`);
  },
  greetLater() {
    setTimeout(function () {
      console.log(`Hi, I’m ${this.name}`); 
    }, 1000);
  },
  greetFixed() {
    setTimeout(() => {
      console.log(`Hi, I’m ${this.name}`); 
    }, 1000);
  }
};

// creating objects 

let  passMark  = 50 ;
 const students2 = [
  { name : "Siya",  age : 20,  marks : 45 },
  { name : "Thato" , age : 18 , marks : 56},
  { name : "Sizwe" , age : 19,marks :78},
  {name : "Mpumi" , age :21 , marks : 96},
  { name : "Luvuyo " ,age : 19, marks : 48}
]

for (let i= 0; i < students2.length; i++) {
  let  name = students2[i][0]  ;
  
}
if (passMark < students2[3]) {
    console.log( name, "well done  got ", marks ,"%");
    
  } else {
    console.log("Try again next year" ,name ," Your marks ",marks ,"%");
    
    
  };
  








    
