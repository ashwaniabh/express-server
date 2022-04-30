// object task 
//in this we will study some obejects functions 

//Object.assign
//it copies all propertis fro one or more source obj to a target obj;
let target={
    a:1,b:2
   };
let source=
{
    b:4,
    c:5
}
let returntarget= Object.assign(target,source);//here property of source will be assign to target obj
console.log(returntarget);//ad return target value;
console.log(target);

//object.creat()
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Ashwani'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();

  //object define properties
  //it defines new or modifies existing properties directly on an object, returning the object.
  const object1 = {};

  Object.defineProperties(object1, {
    property1: {
      value: 42,
      writable: true
    },
    property2: {}
  });
  
  console.log("object.defineProperties()",object1.property1);// e 42


  // obeject.defineproperty();
  // The static method Object.defineProperty() defines a new property directly on an object, or
  // modifies an existing property on an object, and returns the object.
  const object2 = {};

  Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
  });
  
  object2.property1 = 77;
  // throws an error in strict mode
  
  console.log("object.defineProperty()",object2.property1);//



  //object entries
  const object3 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object3)) {
    console.log("object entries",`${key}: ${value}`);
  }
  //Object.freez(obj);
  //it freez the value of object ans it will not be edit more;
  const obj = {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);//object will remain 42;


  //Object.fromEntries() it transforms a list of key-value pairs into an object.
  const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
  const obj1 = Object.fromEntries(entries);
  
  console.log(obj1);
  // expected output: Object { foo: "bar", baz: 42 }
  

  //object is 
  //it cheacks that the given value are same or not then it wll retur trye or false as per the condition .


Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true



//