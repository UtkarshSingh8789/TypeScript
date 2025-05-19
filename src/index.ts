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

function delayedCall(fn: (a: string) => void, arg: string) {
    setTimeout(() => fn(arg), 5000);
}

function greet(name: string) {
    console.log("hello " + name);
}

delayedCall(greet, "Richa");
