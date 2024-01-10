// let obj = {
//     name: "abir",
//     age: 33,
//     isHuman: true
// }

// obj.name = "hello"
// console.log(obj)

// function xyz(a : number, b : number) {
//     return a + b;
// }

// console.log(xyz(3,7))

// explicit ..........................................
// let a: string[] = []

// a.push('HEllo')
// console.log(a)

// union ...........................
// let a: (string | number)[] = []

// a.push(33, "hello")
// console.log(a)
// let c: {
//     name: string,
//     age: number
// }

// c = {
//     name : "hello ",
//     age: 44
// }
// console.log(c)

// const myFunc = (a: string, b: string) => {
//     console.log(`Hello ${a} ${b}`)
// }

// myFunc("abir","boss")

// const myFun = (a: string, b: string, c: string = "true") => {
//     // console.log(c)
//     // console.log(`Heloo ${a} ${b}`)   return void
//     return a + b; //return string
// }

// console.log(myFun("lol", "bol", "false"))


// aliass 
// type stringOrNumber = string | number
// type userDetails = { name: string, age: number}

// const myFunc = (id: stringOrNumber, user: userDetails) => {
//     console.log(`Id is ${id} name is ${user.name} age is ${user.age}`)
// }


// const myFun = (id: string | number, user: { name: string, age: number}) => {
//     console.log(`Id is ${id} name is ${user.name} age is ${user.age}`)
// }

// myFunc(4444,{name: "abir",age: 44})


// let myFunc: (a: number, b: number) => void;

// myFunc = (a,b) =>{
//     console.log(a+b)
// }

// myFunc(3,4);

// funtion signature 
// let myFun: (a: number, b: number, c: string) => number;

// myFun = (a: number, b: number, c: string) => {
//     if(c == "add"){
//         return a + b;

//     }else {
//         return a - b;
//     }
// }

// console.log(myFun(5,6,"add"))

// classes  

// import { Car } from "./classes/Car.js"

// const car1 = new Car("bmw", 33, "usa")
// const car2 = new Car("audi", 33, "uk")

// let arr: Car[] = [];

// arr.push(car1)
// arr.push(car2)
// console.log(arr)

interface RectangleOptions {
    width: number;
    length: number;
}

function drawRectangle(options: RectangleOptions){
    let width = options.width;
    let length = options.length;
}

let threeDOptions = {
    width: 30,
    length: 20,
    height: 30
}
drawRectangle(threeDOptions)