let arr=["apple","Banana","White","Car","Hello"]

//include prototype
//it cheaks is the certain value is exit in yhis array it will return true or false
console.log("is apple in arr :",arr.includes("apple"));//  is apple in arr : true


//Filter
//it make new array from the given arrat that passes the test impelmentation
let New = arr.filter(word => word.length>3);
console.log("\n",New);//[ 'apple', 'Banana', 'White', 'Hello' ]  car will not be there beacuse it have 3 word length


//find 
// it find the fierst element that statisfy the given testing function
let arr1=[2,3,4,7,9];
let greterthan5= arr1.find(element=>element>5);
console.log("\n"+"the first greter than 5 elemnts is : ",greterthan5);//the first greter than 5 elemnts is :  7

//shift
//it remove first element of array from array and return its first element and it change the lentgh of array
console.log("\n"+"array before shiftin",arr1);
let firstEle=arr1.shift();
console.log("array after shifting",arr1," first elemnt was ",firstEle);

//unshift it add one or more array in the begining of array and returnnew length of the array.
//arr1=[2,3,4,7,9];
arr1.unshift(4,5);
console.log("\n"+"arr1 after unshift",arr1);


//push 
//it add one or more elements at the ending of array and return new length of array
console.log("\n"+"araay before push",arr1);
console.log("new length of array",arr1.push(9,7));
console.log("array after push ",arr1);

//pop
//pop method remove the last element of the array and return removed element it change tha lentgth of array
console.log("\n"+"array before pop: ",arr1)
console.log(arr1.pop());
console.log("array after pop",arr1)


//sort
//it sort the given array in assending order
arr1=[6,2,8,5,2,7];
console.log("\n"+"array is: ",arr1);
arr1.sort();
console.log("array after sort",arr1);//[2, 2, 5, 6, 7, 8 ]
arr1.sort((a,b)=>a-b);
console.log(arr1);//[2, 2, 5, 6, 7, 8 ]

//arrat distructing

let [a,b,...rest] = [11, 22, 30, 40, 8,78, 50];
console.log("\n"+"rest =",rest, "using distructing");//rest =30, 40, 8, 78, 50


//spread syntax(...)
function sum(a,b,c){
    return a+b+c;
}
let n=[1,2,3];
console.log("sum of n=[1,2,3]");
console.log("is",sum(...n));6

let m=[...n];
n.push(4);//it add 4 in new array without affecting original array
console.log(m);


//rest perameter in array
function sumof(...array){
    return theArge.reduce((pre,cur)=>{
       return pre+cur;
    }
    );
}
console.log("addition of 1,2,3 is",sum(1,2,3));//add= 6

//for in loop
//in this loop element is reprents the location of pointer
let arr3=[5,4,2,78,9,];
console.log("using for in loop  ");
for(let element in arr3){
    console.log(element);//here element print the ith iteration 
}
console.log("using for of loop");
for(let element of arr3){
    console.log(element);// her elemt printing the elemnet on ith iteration
}


//for of loop
//in for od loop elements is repersent value of elemnets location in aaray


