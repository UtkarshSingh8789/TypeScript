// let x:number=1//type interfencing
// console.log(x);
// function sum(a:number,b:number):number{ 
//     return a+b
// }
// let ans=sum(5,5)
// console.log(sum)

// writing a function which take a guction as an input and runs after 5second;

// function delayedCall(fn:(a:string)=>void){
//     setTimeout(fn,5000)
// }
// function greet(name:string){
//     console.log("hello"+name)
// }
// delayedCall(greet)

// function delayedCall(fn: (a: string) => void, arg: string) {
//     setTimeout(() => fn(arg), 5000);
// }

// function greet(name: string) {
//     console.log("hello " + name);
// }

// delayedCall(greet, "Richa");

// defining types of non-primitive data structure;
function greet(user:{
    name:string,
    age:number,
}){
    console.log(user.name)
}
greet({name:"utkarsh",age:60})
// type UserType={
//     firstName:string,
//     lastName:string,
//     age:number
// }
interface UserType {
    firstName:string,
    lastName:string,
    age:number
}
let user:UserType={
    firstName:"nishi",
    lastName:"utkarsh",
    age:21,
}

// creating an react component that takes todos as input and renders them;
// Todo.tsx
// interface TodoType {
//   title: string;
//   description: string;
//   done: boolean;
// }

// interface TodoInput {
//   todo: TodoType;
// }

// function Todo({ todo }: TodoInput) {
//   return <div>
//     <h1>{todo.title}</h1>
//     <h2>{todo.description}</h2>
    
//   </div>
// }

interface Manager {
    name:string,
    age:number
}
interface Employee {
    name:string,
    department: string
}
type TeamLead= Manager & Employee // we can not do this by defining interface, for joinging we have to definn type only
let t:TeamLead={
    name:"singh",
    age:50,
    department:"cse"
}

// Given a list of users, filter out the users that are legal (greater than 18 years of age)
// interface User{
//     firstName:string,
//     lastName:string,
//     age:number
// }
// function filterUser(users:User[]){
//     return users.filter((x)=>x.age>=18)
// }
// console.log(filterUser([{firstName:"utkarsh",
//     lastName:"singh",
//     age:19
// },{
//     firstName:"nishi",
//     lastName:"pallavi",
//     age:17
// }]))

//ENUM;Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.
// What should the type of keyPressed be?
// Should it be a string? (UP , DOWN , LEFT, RIGHT) ?
// Should it be numbers? (1, 2, 3, 4) ?
//The best thing to use in such a case is an enum.

enum Direction{
    Up,
    Down,
    Left,
    Right
}
function doSomething(direction:Direction){
    console.log(direction)
}
doSomething(Direction.Up)// by default zero, we can change the default value also;
// if we change the Up value to 1; then by default the value od down will be 2 and so on;
enum Directions{
    Up="up",
    Down="dn",
    Left="lf",
    Right="r"
}
console.log(Directions.Down)
function doThis(direction:Directions){
    if (direction === Directions.Up) {
        console.log("Going Up");
    } else if (direction === Directions.Down) {
        console.log("Going Down");
    } else if (direction === Directions.Left) {
        console.log("Going Left");
    } else if (direction === Directions.Right) {
        console.log("Going Right");
    } else {
        console.log("Unknown direction");
    }
}
doThis(Directions.Up)
doThis(Directions.Left)