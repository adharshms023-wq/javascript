let arr = [2,3,4,2,1,2,'23','red','blue'];

console.log(arr)
console.log(arr.length)
console.log(arr[2]);
console.log(arr.pop());
arr.push('new');
arr[1] = 'color';
arr.shift();
arr.unshift(21);
console.log(arr);
arr.splice(2,2,'orange','pink');
console.log(arr);

let person={
    firstName : 'maya',
    age : 23,
    place : 'Kochi',
    new : 'new'
}
let vehicle = {
    name: 'nissan gtr',
    model: 'r34',
    color:'red',
    number: '234'
}
console.log(person['age']);
console.log(vehicle)

let person1 = new Object();
person1.firstname = 'meera';
person1.age = '23';
console.log(person1);

//ES6---class
class Car{
    constructor(name,year,model){
        this.name=name;
        this.year = year;
        this.model = model;
    }
}

let obj_car1 = new Car('MAX','XS',2020);
console.log(obj_car1);

let students = [{firstName:'alice',age:20},{firstName:'bob',age:23},{firstName:'new',age:21}];
console.log(students[1].age);

let p = {
    address:{
        street:'tampanoor',
        city:'trivsndrum',
        state:'kerala'
    }
}
console.log(p.address);

function addnum(a,b){
    var sum = a+b;
    // console.log(`Sum of two number is ${sum}`);
    return sum;
}

function mul(a,b){
    var m = a*b;
    return m;
}

var result = addnum(22,43);
var multi = mul(2,4);

let add=(a,b)=>{
    return a+b;
}

let min=(a,b)=>{
    return a-b;
}
console.log(`the sum of the number is ${result}`);
console.log(`the multiple of the number is ${multi}`);
console.log(add(2,2));
console.log(min(10,4));

let person2={
    firstName:'krishna',
    lastName:'menon',
    fullName:()=>{
        return `${person2.firstName} ${person2.lastName}`;
}
}
console.log(person2.fullName());

let numb=[1,2,3,4,5,6];
numb.forEach((item,ind,arr3)=>{
    arr3[ind] = item>3;
})

console.log(numb);

let ages = [23,13,44,13,65,11,12];
let adult = ages.filter((age)=>{
    return age>=18;
})

console.log(adult);

let [x,y,z] = [10,20,30]; 
console.log(x);

// spread operator 
let arr4 = [1,2,3,4];
let arr5 = [22,33,44];
let arr6 = [...arr4,10];
let [a,b]  = [...arr4,10];
console.log(arr6);
console.log(a)
console.log(b)

 