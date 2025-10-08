// // // // // let arr = [3,23,43,34,24,35,43];// find second largest number 



// import { log } from "mathjs";


// // // // // let largest = -Infinity;
// // // // // let seclarge = -Infinity;

// // // // // for(let i=0;i<arr.length;i++){

// // // // //     if(arr[i]>largest){
// // // // //       seclarge= largest;
// // // // //       largest=arr[i];
// // // // //     }

// // // // //     else if(arr[i]>seclarge && largest!==arr[i]){
// // // // //        seclarge=arr[i];
// // // // //     }
// // // // // }


// // // // // console.log(largest);
// // // // // console.log(seclarge);












// // // // // let str = prompt("enter a string "); // check palidrome or not 

// // // // // let palidrome = str.split("").reverse().join("");

// // // // // if (str===palidrome){
// // // // //   console.log(palidrome,"is a palidrome");
  
// // // // // }else{
// // // // //   console.log( str ,"  is not a pallidrome ");
  
// // // // // }









// // // // // let num = parseInt(prompt("enter a number ")); // factorial of number 
// // // // // let fact = 1

// // // // // for(let i = 1; i<=num;i++){
   
// // // // //    fact = fact * i ;
// // // // // }

// // // // // console.log(fact);


// // // // // function iseven(num){
// // // // //     if(num%2===0){
// // // // //         console.log("even");
        
// // // // //     }else{
// // // // //         console.log("odd");
        
// // // // //     }

// // // // // }

// // // // // console.log(iseven(77));


// // // // // const ischeck = (num)=>{
// // // // //     if(num>0){
// // // // //         return "positive number";
// // // // //     }
// // // // //      else if (num<0){ 
// // // // //         return "negative";

// // // // //     }
// // // // //     else {

// // // // //         return "zero ";
// // // // //     }
// // // // //     }
// // // // // console.log(ischeck(0));







// // // // // const max = (a,b,c) => {
 
// // // // // if(a>b && a>c){
// // // // //     return " max number is A";
// // // // // }

// // // // //     else if (b>a && b>c){

// // // // //         return " b is a max number ";
// // // // //     }

// // // // // else {
// // // // //     return "c is max number ";
// // // // // }

// // // // // };

// // // // // console.log(max(21,32,34));













// // // // // let arr = [21, 43, 21, 65, 54, 76, 12, 11, 8, 53, 43, 65, 43, 56];

// // // // // let sum = 0;

// // // // // for (let i = 0 ;i<arr.length; i++){
// // // // //     sum += arr[i];
// // // // // }
// // // // // let average = sum/arr.length;
// // // // // console.log(Math.floor(average)); //this some math.method which isb control mathematical control 
// // // // // console.log(average);
// // // // // console.log(Math.ceil(average));
// // // // // console.log(Math.round(average));





// // // // //************** */
// // // // // we create a game user game number 

// // // // // let gameNum = 54;

// // // // // let userNum = Number(prompt("guess the number "));


// // // // // while(gameNum!==userNum) {
// // // // //   userNum=Number(prompt("you guess the wrong number , guess again "));

// // // // // }
// // // // // console.log(" congrats you guessed the right number ");






// // // // //count digit in number 



// // // // // sum of alll digit 

// // // // // let num = 34232;
// // // // // let sum = 0 ;

// // // // // while(num>0){
// // // // //     let rem = num%10
// // // // //     sum = sum + rem ;
// // // // //     num = Math.floor(num/10);
// // // // // }
// // // // // console.log(sum);



// // // // // let item = [ 600,650,800,300,700,750]

// // // // // for(let i = 0; i<item.length;i++){

// // // // //     let offer =   item[i]/10

// // // // //     item[i] = item[i] - offer 

// // // // // }

// // // // // console.log(item);





// // // // // reverse str without using ,split()


// // // // // let str = "ritik";

// // // // // let reverseStr = "";

// // // // // for(let i= str.length-1; i>=0;i--){
// // // // //        reverseStr  +=  str[i]
     
       
// // // // // }
// // // // // console.log(reverseStr);


// // // // // let str  = "coder";

// // // // // let newStr = str.split("").reduce((result,char)=> char + result,"");
// // // // // console.log(newStr);


// // // // // const countdigit = (digit)=>{

// // // // //     let sum = 0;
// // // // //     let rem = 0;

// // // // //     while(digit>0){
// // // // //         rem = digit%10;
// // // // //         sum += rem

// // // // //         digit =  Math.floor(digit/10);

// // // // //     }
// // // // //     return sum;
// // // // // }


// // // // // let output = countdigit(3243);

// // // // // console.log(output);











// // // // // reduce method 

// // // // // let str = "ritik sahu";

// // // // // const reverse = str.split('').reduce((acc,curr)=>{
// // // // //    return curr+acc
// // // // // },"")

// // // // // console.log(reverse);





// // // // let num = [10,20,30,40];

// // // // sumofNum = 0;
// // // // average = 0;
// // // // num.forEach((Element)=>{

// // // // sumofNum  += Element
// // // // average = sumofNum/num.length;
// // // // })
// // // // console.log(average);



























// // // // let arr = [2,2,4,5,7,8,2];


// // // // const sumOfOdd = arr.filter((item)=> item%2!==0).map((item)=>item*item);

// // // // console.log(sumOfOdd);




























// // // // date and time 

// // // // let mydate = new Date();

// // // // console.log(mydate.toString());

// // // // console.log(mydate.toDateString());

// // // // console.log(mydate.toLocaleString()); // its for date and time both 


// // // // console.log(mydate.toLocaleTimeString());  // its only for time


// // // // console.log(Math.floor(mydate.getDay()));











// // // //  function in javascript 


// // // // function sum (num1,num2){
// // // //     return num1+num2;
    
// // // // }

// // // // console.log( sum(3,3));








// // // // let studentobj = {
// // // //     username : "ritik sahu",
// // // //     age : 22,
// // // // }

// // // // function checkobj (anyobj){

// // // //  console.log(`the username is ${anyobj.username} and age is ${anyobj.age}`);
  
  
// // // // }

// // // // checkobj(studentobj);



// // // // // // function with array 
// // // // // let numArr = [200,300,500,100,800];

// // // // // function checArr(anyArr){
// // // // //      console.log("your num is ",anyArr[2]);
     
// // // // // }


// // // // // checArr(numArr);






// // // // function sumOfdigit(digit){
       
// // // //     let sum = 0;
// // // //     let rem  = 0 ;

// // // //     while(digit>0){
// // // //        rem = digit%10;
// // // //         sum  = sum + rem ;
// // // //           digit = Math.floor(digit /10);
// // // //     }
// // // //     return sum;

// // // // }

// // // // let output = sumOfdigit(2686);

// // // // console.log(output);













// // // // const checkPalidrome =(str)=>{
// // // //   let reverse = str.split("").reverse().join("")
// // // //          if (str===reverse){
// // // //              return (`${str} is palidrome`);
             
// // // //          }else{
// // // //             return (`${str} is not a palidrome `);
            
// // // //          }

// // // // }

// // // // console.log(checkPalidrome("ritik"));




// // // // function maxNum (num){

// // // //     let max = num[0];

// // // //     for(let i=1; i<num.length; i++ ){
// // // //         if(num[i]>max){
// // // //             max = num[i];
// // // //         }
// // // //     }
// // // //     return max ;
// // // // }

// // // // let output = maxNum([20,30,70,40,30,60]);
// // // // console.log(output);

// // // // function maxnum (num1){
// // // //     return Math.max(...num1)
// // // // }
// // // // console.log(maxnum([23,32,42,24,56]));
















// // // // prime number check 


// // // let num  = Number((prompt("enter a value ")))
// // // let isprime = true;

// // // if(num<=1){
// // //    console.log(`${num} is not prime `);
   
// // // }else {
// // //     for(let i = 2; i<=Math.sqrt(num);i++){
// // //         if(num%i===0){
// // //             isprime = false;
// // //             break;
// // //         }
// // //     }
// // // }

// // // if (isprime) {
// // //     console.log(`${num} prime`);
    
// // // }else{
// // //     console.log(`${num} is not prime `);
    
// // // }
























// // // +++++++++++++++++++this and arrow function++++++++++++++++++++++++

// // // let user = {
// // //     name:"ritik",
// // //     age:22,
// // //     welcomeMessage: function(){
// // //         console.log(this.name);
        
// // //     }
// // // }

// // // user.welcomeMessage()




// // // const explicit = (num1,num2)=>{  
// // //       return num1+num2;     // explicit return
// // // }


// // // console.log(explicit(2,3));






// // // const implicit = (num1,num2)=> ( num1+num2) ; // implicit in react this is most important 


































// // // // +++++++iife and double iife in onecode 

// // // (function sayhii (name){
// // //       console.log(`name : ${name}`); // named iife
      
// // // }) ("ritik");                       // semicolon must




// // // // unnamed is iife
// // // ((age)=>{
// // //     console.log(`age : ${age}`);
    
// // // })(22)



























// // // +++++++++++practice++++++++++++++++++++++





// // // remove duplicate elements of array 

// // let num = [ 1,2,2,3,4,3,4,3,5,3,2,1];


// // let output = num.filter((element,index)=>{

// //        return num.indexOf(element)===index
// // });

// // console.log(output);




// // let num = 1234;

// //   reversedigit = num.toString().split("").reverse().join("");

// //   console.log(reversedigit);
  


// //   function reversedigit(number){
// //        let rem = 0;
// //        let reverse = 0; 
       
// //   while(number>0){
// //        rem = number%10;
// //         reverse = reverse * 10 + rem ;
// //         number = Math.floor(number/10);
        
// //   }
// //      return reverse;
// //   }

  
// //   console.log(reversedigit(33432));
  










































// ++++++++++armstrong practice question+++++++++++++++++++++


// let num = Number(prompt("enter a number"))
// let original = num;

// let rem = 0 ; let sum = 0 ;
//    let digit = original.toString().length;
    
// while (num>0) {
//      rem = num%10;
    
//      sum = sum + Math.pow(rem,digit);
//      num = Math.floor(num/10);
  
// }

// if (sum===original) {
//      console.log(`num is armstrong`);
     
// }else{
//      console.log(`num is not a armstrong`);
     
     
// }



















// function evenNumber(num){
//     let result = [];
//     for(let i =1; i<=num;i++ ){
//         if(i%2===0){
    
//          result.push(i);
            
//         }
     
//     }
//  return result ;
// }

// console.log(evenNumber(50));


























// let arr = [10,2,4,2,4,14,5,95,35,22,15,65,7,8,88,90];

// // let fiveDivisible = arr.filter((item)=> item%5===0);
               
// // // console.log(fiveDivisible);



// let fiveDivisible = [];
// for(item of arr){
//     if(item%5===0){
//        fiveDivisible.push(item)
//     }
// }
// console.log(fiveDivisible);




// // let fiveDivisible = [];

// // for(let i = 0; i<arr.length;i++ ){
// //     if(arr[i]%5===0){
// //         fiveDivisible.push(arr[i]);
// //     }
// }

// console.log(fiveDivisible);




















// let str = "Radhakrishna";

// // str  = str.toUpperCase();

// let vowels = "AEIOUaeiou";
// let vowelCount = 0 ;
// let consonentCount = 0;

// for(let chr of str ){
    
//     if(/[a-zA-Z]/.test(chr)){
//         if(vowels.includes(chr)){
//             vowelCount++;
//         }
//         else{
//         consonentCount++;
//     }
//     }

//     }
// console.log(`${vowelCount} vowels and ${consonentCount} consonent in a ${str}`);

















// function checkPrime(num){
// while(num<2){
//     console.log(`${num} is not prime`);
//     return;
// }


// for(let i = 2; i<=Math.sqrt(num);i++){
//       if(num%i==0){
//          console.log(`${num} is not prime `);
//          return
//       }
// }
// console.log(`${num} is prime`);
//  return ; 
// }

// checkPrime(1);


































// // remove duplicate from array 


// let arr = [1,2,3,4,5,6,6,3,4,5,6,8];


// let newarr = [];

// for (let i = 0; i < arr.length; i++) {
//     if(!newarr.includes(arr[i])){
//         newarr.push(arr[i])
//     }    
// }


// console.log(newarr);
// // 






// let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// let newNum = num.filter((item)=>item%2!==0).map((item)=>item*item*item)


// console.log(newNum);







































// let num = [20,40,30,10,50,30,34,55,76,44,87,86,59];


//  let largest = -Infinity;
//  let seclarge = -Infinity;
//  let thirdlarge = -Infinity
// num.forEach( (item) => {
    
//     if(item>largest){
//         thirdlarge = seclarge;
//         seclarge = largest;
//         largest=item;
//     }
//     else if(item>seclarge && item!==largest){
//          thirdlarge = seclarge
//         seclarge=item;
//     }
    
//     else if( item>thirdlarge && item!==seclarge && item!==largest)
//         thirdlarge=item;
//  });

// console.log(`largest number is ${largest} and secondlargest mumber is ${seclarge} and third largest is ${thirdlarge}`);




















// let num = [ 2,3,5,6,8,4,3,3,1,5];



// let squareNum = num.reduce((sum,item)=>sum+item*item,0)

//  console.log(squareNum);










// let str1 = "ritik";
// let str2 = "kitir";


// str1 = str1.split("").sort().join("");
// str2 = str2.split("").sort().join("");

// if(str1!==str2){
//     console.log("");
    
// }else{
//     console.log("this two strings are anagram");
    
// }



// function helloworld (){

//     console.log("hello world ");
    


    
// }

// helloworld();  


// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body")


// buttons.forEach((button)=>{
//     button.addEventListener("click",(e) =>{
//         if(e.target.id==="purple"){
//             body.style.backgroundColor=e.target.id
//         }
//         if(e.target.id==="grey"){
//             body.style.backgroundColor=e.target.id
//         }
//         if(e.target.id==="red"){
//             body.style.backgroundColor=e.target.id
//         }
//         if(e.target.id==="green"){
//             body.style.backgroundColor=e.target.id
//         }
//     })
// })



// let str = "hello";
// let sum = "" ;

// for(chr of str){
//   sum = chr+sum;
// }
// console.log(sum);




// let str = "ritik";

// const reverseStr = str.reduce((acc,chr)=>chr+acc,""); 
// console.log(reverseStr);








// let arr = [1,2,3,4,5,6];


// let = newarr = [];
// const reversestr = arr.reduce((acc,item)=>[item,...acc],[]);

// console.log(reversestr);
















// let arr = [1,2,3,4,5,6,8,9];
// let newarr = arr.reverse()
// console.log(newarr);










// let number = [1,2,3,4,5,6,6,6,4,3,4,2,5,6,1,3,2,2];



//  for( let item of number){
//     if(!newNum.includes(item)){
//      newNum.push(item) 
//     }

//  }


//  const newNum = number.filter((item,index)=> number.indexOf(item)===index )
// console.log(newNum);

// function check (){
//     setTimeout(()=> {
//         console.log("hello chatgpt");
        
//     },2000);
// }

// check();


// function   counter () {
//     let count = 0 ;

//     const interval = setInterval(()=>{
//         count++;
//         console.log(`${count} counting`);
         
//           if(count===5){
         
//             clearInterval(interval)
//             console.log("counting stop");
            
//           }
//           },1000)
          
          
// }
// counter();

// function counting () {
//     let count = 0;

//     function run (){
//         count++;
//         console.log(count,"counting");
//         if(count<5){
//             setTimeout(run,1000)
//         }else{
//             console.log("stop ");
            
//         }

//          }
//         setTimeout(run,1000)
//     }
//     counting();



// let num = 23;
// let isprime = true;
// for(let i = 2; i<num-1; i++){

//     if(num%i===0){
//         isprime = false;
//         break;
//     }
// }

// if(isprime===true){
//     console.log("number is prime");
    
// }else{
//      console.log("number is not prime");
     
// }







// function checkprime(num){
// if (num<2) 
//     {
//     console.log("not prime");
//     return;
// }
//  let isprime = true;

//  for(let i = 2; i<=Math.floor(Math.sqrt(num)); i++){
//       if (num%i===0) {
//         isprime = false;
//         break;
//       }
    
//  }
//  if (isprime===true) {
//     console.log("number is prime");
    
//  }else{
//   console.log("number is nnot prime ");
  
//  }
 
// }

// checkprime(1);

// let promise = new Promise((resolve ,reject) => {


// });

// promise.then(()=>{
//   console.log("our then function is succesfully runned ");
  
// });

// let promisetwo = new Promise((resolve , reject)=>{
//   setTimeout(()=>{
//     console.log("promise two");
//     resolve()
//   },3000)
// }).then(()=>{
//   console.log("promise consumed ");
  
// })

//   setTimeout(()=>{
//     console.log("our settimeout function runned");
//     resolve();
//   },3000);

// let promisethree = new Promise((resolve , reject)=>{
//   setTimeout(()=>{
//     console.log("promise three");
//     resolve({username:"ritik",age:22})
//   },3000)

// }).then((user)=>{
//   console.log(user.age);
  
  
// })












//++++++++++++++++++++important promise concept (chaining) +++++++++++++++++++++++++

// let promisefour = new Promise ((resolve,reject) =>{
//       setTimeout(()=>{
//         let error = false ;
//         if(!error){
//         resolve({username:"ritik",age:22,email:"sahuritik1618@gmail.com"});
//         }else{
//           reject("something went wrong ");
//         }
//       },2000)
// });

// promisefour.then((user)=>{
//   console.log(user);
//   return user.username
  
// }).then((username)=>{
//   console.log(username);
  
// }).catch((error)=>{
//   console.log(error);
  
// }).finally(()=> console.log("promise is resolve or reject finally "))





// //+++++++++++++promise consumed with async await ++++++++==++++++++=
// let promiseFive = new Promise((resolve,reject) => {

//   setTimeout(()=>{
//         let error = true ;
//         if(!error){
//         resolve({username:"nitin",age:22,email:"sahuritik1618@gmail.com"});
//         }else{
//           reject("Error: something went wrong in promise five  ");
//         }
//       },2000)

// } );


// async function consumedPromise () {
// try {
//        let response = await promiseFive;
//        console.log(response.email);
       
// } catch (error) {
//   console.log(error);
  
// }
// }

// consumedPromise();



// async  function fetch (){
    
//       try {
//         const response =  await fetch("data fetched ");
//            const data = response.json()
//            console.log(data);
//       } catch (error) {
//         console.log("error");
        
//       }     
// }

// fetch();


// fetch("nitin").then((response)=>{
//   console.log(response);
//   return response.json
  
// }).then((response)=>{
//   console.log(response);
  
// }).catch((error)=>{
//   console.log("something went wrong ");
  
// })

















// +++++++ practice question promise and asych await ++++++++++++++++++++++++++++++++++














// let getuserid = new Promise((resolve,reject)=>{

//   setTimeout(()=>{
//     let userid = 1;

//     if(userid>0){
//       resolve("user data fetched for id")
//     }else{
//      reject("invalid id ")
//     }
//   },2000)
// })

// getuserid
// .then((message)=>{
//   console.log(message);
  
// })
// .catch((error)=>{
//   console.log(error);
  
// })


// async function userid () {
      
//       try {
//         const response =  await getuserid
//         console.log(response);
        
//       } catch (error) {
//         console.log(error);
        
//       }
// }

// userid()








// function reverseStr(str) {

//     str= str.split("").reverse().join("")

//    return str;

// }

// console.log(reverseStr("sahuritik"));



// let str = "ritik"

// let result = ""
// for(let i = str.length-1; i>=0; i--){
//     result = result + str[i]
// }

// console.log(result);


let str = "something";

str  = str.Reduce((acc,curr)=>acc+curr,"")


console.log(str)


