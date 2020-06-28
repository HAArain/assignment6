////////////////////////////CHAPTER 21-25////////////////////////////////



/////////////////////////////////////TASK 01 ///////////////////////////

// var firstname  = prompt("enter your first name");
// var lastname  = prompt("enter your last name");

// var fullname = firstname + lastname;

// document.write("Assalam.o.alikum " + fullname);


/////////////////////////////////////TASK 02 ///////////////////////////

// var phone  = prompt("enter your favourite mobile phone name");
// var count = phone.length;
// document.write("length of string " + count);


/////////////////////////////////////TASK 03 ///////////////////////////

// var string = "paksitani";

// document.write(string + "<br>");

// var a = string.indexOf("n");

// document.write(" index of n : " + a);

/////////////////////////////////////TASK 04 ///////////////////////////

// var string = "HELLO WORLD";

// document.write(string + "<br>");

// var a = string.lastIndexOf("L");

// document.write(" index of L : " + a);


/////////////////////////////////////TASK 05 ///////////////////////////



// var string = "pakistani";

// document.write(string + "<br>");

// var a = string.charAt(3);

// document.write(" character at index 3  : " + a);

////////////////////////////////////TASK 06 ///////////////////////////

// var firstname = prompt("enter your first name");
// var lastname  = prompt("enter your last name ");

// var fullname = firstname.concat(lastname);


// document.write(fullname);



////////////////////////////////////TASK 07///////////////////////////

// var city = "Hydrabad";
// var rep = city.replace("Hydra","Islama");
// document.write(rep);

////////////////////////////////////TASK 08///////////////////////////


// var message = ' "Ali and Sami are best friends. They play cricket and football together."' ;

// var rep = message.replace(/and/g , "&");

// document.write(rep);


////////////////////////////////////TASK 09///////////////////////////

// document.write("value 472" + "<br>");
// document.write("type string" + "<br>");
// var a = "472";
// var b = parseInt(a);
// document.write(b+"type number");


///////////////////////////////////TASK 10 11///////////////////////////

// var str = prompt("enter leter");

// var res = str.toUpperCase();

// document.write(res);



////////////////////////////////////TASK 12///////////////////////////

// var num = 35.36;
// var n = num.toString();
// var m = Math.floor(n);
// document.write(m);



////////////////////////////////////TASK 13///////////////////////////




// var a = prompt("please input your name");
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] == String.fromCharCode(33) || a[i] == String.fromCharCode(44) || a[0] == String.fromCharCode(44) || a[i] == String.fromCharCode(46) || a[i] == String.fromCharCode(64)) {
//             alert("please enter a valid username")
//             break
//         }
//         if(i === a.length -1){
//             alert(a)
//         }
//     }


////////////////////////////////////TASK 14///////////////////////////



// var b = prompt("enter your search");
// var b = b.toLowerCase();
// var a = ["cake","apple pie" , "cookie " , "chips" , " patties"];

// for(var i =0; i < a.length; i++){

//      if(a[i] === b){

//         alert("search found");

//         break;
//      }

//      if(i==a.length -1){

//       alert("search not found");

//      }

// }


////////////////////////////////////TASK 15///////////////////////////


// var a = prompt("");
// var numbers = /^[A-Za-z][A-Za-z0-9]{6,}$/
// if(numbers.test(a)){

//     alert("valid pass");
// }
// else{

//     alert("invalid");
// }



////////////////////////////////////TASK 16///////////////////////////


// var university = ' “University of Karachi” , ';

// var res = university.split("");


// for(i=0; i<res.length; i++){

// document.write("<br>" + res[i]);

// }

////////////////////////////////////TASK 17///////////////////////////

// var a = prompt("");
// var b = a.charAt(a.length-1);
// document.write(b);

////////////////////////////////////TASK 18///////////////////////////



// var str="the quick brown fox jumps over the lazy dog";
//     var i,check,counter=0;

//     for(i=0;i<str.length;i++){
//         check =str.slice(i,i+3)
//         if(check=="the"){
//             counter+=1
//         }
//         else{}
//     }
//     alert(counter)




/////////////////////////////26 to 30 ///////////////////////


///////////////////////////////////TASK 01///////////////////////////


// var a = prompt("");
// document.write("the user input number is " + a + "<br> ");
// var b =Math.round(a);
// document.write("round of " +  b + "<br>");
// var b =Math.floor(a);
// document.write("floor value " + b + "<br>");
// var b =Math.ceil(a);
// document.write("ceil value"+b + "<br>");



///////////////////////////////////TASK 02///////////////////////////

// var a = prompt("-2.637");
// document.write("the user input number is " + a + "<br> ");
// var b =Math.round(a);
// document.write("round of " +  b + "<br>");
// var b =Math.floor(a);
// document.write("floor value " + b + "<br>");
// var b =Math.ceil(a);
// document.write("ceil value"+b + "<br>");

///////////////////////////////////TASK 03///////////////////////////

// var a = prompt("");
// var b=Math.abs(a);
// document.write(b);

///////////////////////////////////TASK 04///////////////////////////

///////////////////these program to user input how many time roll dice user input 5 display 5 random number //////////////

// var RandomNumber;
// var RollDice;
// var i;


// RollDice  = prompt("how many time do yoy roll the dice");
// for(i=1; i<=RollDice; i++){

//     RandomNumber = Math.ceil(Math.random()*6);
//     document.write(RandomNumber);
// }

///////////////////////////////////TASK 05///////////////////////////

// var a= Math.ceil( Math.random()*2);
// if(a==1){

//     document.write("tail");

// }
// else if(a==2){
//     document.write("head");
// }
// else{

//     document.write(a)
// }

///////////////////////////////////TASK 06///////////////////////////

// var a = Math.ceil(Math.random()*100);
// document.write(a);

///////////////////////////////////TASK 07///////////////////////////

// var a = prompt("");
// var b= parseInt(a);
// document.write(b);

///////////////////////////////////TASK 08///////////////////////////

// var a = 7;

// var b = prompt("enter a number");

// if(a==b){

//     alert("congrts")
// }
// else{

//     alert("try agin");
// }


///////////////////////////////////CHAPTER 31-34///////////////////////////

///////////////////////////////////TASK 01///////////////////////////

// var date = new Date();



//////////////////////////////////TASK 02///////////////////////////
// var date = new Date();
// var a = ["january","febuary","march","april","may","june","july","august","september","october","november","december"];

// document.write(" current month " +a[date.getMonth()] );

//////////////////////////////////TASK 03///////////////////////////



// var date = new Date();

// var b =date.toString();

// console.log(b);

// var c = b.slice(0,3);

// document.write("today is " + c);



//////////////////////////////////TASK 04///////////////////////////

// var a  = ['saturday','sunday','mon','tue','wed','thu','fri'];


// document.write("it is fun day " + " " + a[0]  +  " "  +  a[1]);



//////////////////////////////////TASK 05///////////////////////////

// var date = new Date();

// if(date==15){

//     document.write("first fifteen days of the month");
// }
// else{

//     document.write("last sixteen days of the month");
// }


//////////////////////////////////TASK 06///////////////////////////

// var date = new Date();
// document.write("the cuurent date is" + date + "<br>");
// var milli = date.getTime();
// document.write("ellapse milisecond mid night  since january 1 19970 " + milli + "<br>");

// var secon = milli*60;
// document.write("ellapse sexcon mid night  since january 1 19970 " +  minute + "<br>");

// var minute = sec*60;
// document.write("ellapse minute mid night  since january 1 19970 " +  minute + "<br>");

//////////////////////////////////TASK 07///////////////////////////

// var noon = new Date();
// if(noon.getHours() > 12 ){

//     document.write(" its is pm")
// }
// else{

//     document.write("its AM ");
// }

//////////////////////////////////TASK 08///////////////////////////

// var d = new Date("31-DEC-2020");
// alert(d);


//////////////////////////////////TASK 09///////////////////////////

// var strt = new Date("18-june-2015");
// var end = new Date();
// var  diff = 0;
// var days = 1000 * 60 * 60 * 24;

// diff = end-strt;
// document.write(Math.floor(diff/days));



//////////////////////////////////TASK 10///////////////////////////




// var d = new Date("5-DEC-2015").getTime()/1000;
// document.write(d);


//////////////////////////////////TASK 11///////////////////////////

// var d = new Date();

// document.write("cuurent time" +d + "<br>");
// d.setHours(d.getHours()-1);

// document.write(" previous houur" +d)


//////////////////////////////////TASK 12///////////////////////////

// var d = new Date();
// document.write("cuurent date" + d  + "<br>");

// d.setFullYear(d.getFullYear()-100);

// document.write("prev time" + d);

//////////////////////////////////TASK 13///////////////////////////

// var a = +prompt("enter your age");
// var b=new Date().getFullYear();
// var c = b-a;
// document.write("your date of birth is" + c);

//////////////////////////////////TASK 14///////////////////////////
// var a = ["january","febuary","march","april","may","june","july","august","september","october","november","december"];
// var customer_name = "hamza ahmed";
// var d = new Date();
// var n = a[d.getMonth()];
// var unit = 410;
// var charge = 16;
// var net_amount = unit*charge;
// var latecharges = 350;
// var grossamount = latecharges+net_amount;

// document.write("customer name " + customer_name + "<br>s" );
// document.write("current month" + n + "<br>");
// document.write("unit" + unit + "<br>");
// document.write("net amount" + net_amount + "<br>");
// document.write("late charges" + latecharges + "<br>");
// document.write("gross amount" + grossamount)\


//////////////////////////////////TASK 35-38///////////////////////////

//////////////////////////////TASK 01 /////////////////////////////////

// function date(){

// var d = new Date();

// document.write(d);

// }

// date();

//////////////////////////////TASK 02 /////////////////////////////////


// function greet(){

// var firstname = prompt("");
// var lastname = prompt("");

// document.write("assalam alikum " + firstname + lastname ); 

// }

// greet()


//////////////////////////////TASK 03 /////////////////////////////////


// function add(){

//     var a = +prompt("");
//     var b= +prompt("");
//      var c = a+b;
//      document.write("the sum of tow num " + c);


// }

// add();

//////////////////////////////TASK 04/////////////////////////////////


// function calc(num1,num2,opr){

//   num1 = +prompt("enter first number");
//   opr  = prompt("enter opertor");
//   num2 = +prompt("enter second number");

//   if(opr == "+"){

//     document.write(num1 + num2);

//   }
//   else if(opr == "-"){

//     document.write(num1 - num2);

//   }
//   else if(opr == "*"){

//     document.write(num1 * num2);

//   }
//   else if(opr == "/"){

//     document.write(num1 / num2);

//   }
//   else if(opr == "%"){

//     document.write(num1 % num2);

//   }
//   else{

//     document.write("error");

//   }



// }

// calc();


//////////////////////////////TASK 05/////////////////////////////////


// function square(a){

//         document.write("the square of " + a + "<br>" + a*a)

// }

// square(3);

//////////////////////////////TASK 06////////////////////////////


// function hamza(n){

    
//     var k = 1;

//         for(i=1; i<=n; i++){
    
//             k = (i*k);
//           }
        
//           document.write(n + " factorial " + k)
    
// }

// hamza(3);

//////////////////////////////TASK 07////////////////////////////

// function counting(start,end){
//     for(var i = start; i <= end; i++ ){
//         document.write(i + " ");
//     }
// }
// var start = +prompt("Enter start number for counting:");
// var end = +prompt("Enter end number for counting:");
// counting(start,end);



// function calcHypotenus(base,  per) {

//     return Math.sqrt(base*base  + per*per) ;
// }

// calcHypotenus(2,3);


//////////////////////////////TASK 08////////////////////////////


// Math.hypot = Math.hypot || function(x, y){ return Math.sqrt(x*x + y*y) }

// var x = 3, y = 4;

// document.write(Math.hypot(x, y));

//////////////////////////////TASK 09////////////////////////////


// function area(height,width){

//  var area = height * width;

//  document.write(area);


// }


// area(4,5);

//////////////////////////////TASK 10////////////////////////////
// function isPalindrome(s) {
    
//     return s == s.split("").reverse().join("");
// }

// alert(isPalindrome("MADAM")); 

//////////////////////////////TASK 11////////////////////////////


