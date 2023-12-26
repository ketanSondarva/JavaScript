// object concept in javascript
// object contain oop features of javascript

console.log("first thing: \n");
const obj = 
{
    myName: "ketan sondarva",
    age: 17,

    // first way to write function in js
    getData: function() {
        console.log(obj.myName);
        console.log("age: "+obj.age+"\n");
    } 
}

obj.getData();

console.log("\nsecond thing: \n");
const obj1 = 
{
    myName: "ketan sondarva",
    age: 17,

    // second way to write function in js
    getData() {
        console.log(obj.myName);
        console.log("age: "+obj.age+"\n");
    }
}

obj1.getData();

// objects in object:
console.log("\nthird thing: \n");
const obj2 = 
{
    // this is nested object
    myName : 
    {
        firstName: " sondarva",
        lastName: " ketan"
    },

    age: 17,

    getData() {
        console.log("my first name:"+obj2.myName.firstName);
        console.log("my last name:"+obj2.myName.lastName);
        console.log("age: "+obj.age+"\n");
    }
}

obj2.getData();
