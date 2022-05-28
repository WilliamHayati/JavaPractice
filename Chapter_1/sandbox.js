// // // //strings
// // // console.log("hello, world");

// // // let email = "mario@thenetninja.co.uk";
// // // console.log(email);

// // // //string concatenation
// // // let firstName = "William";
// // // let lastName = "Hayati";

// // // let fullName = firstName + " " + lastName;
// // // console.log(fullName);

// // // //getting characters
// // // console.log(fullName[0]);

// // // //string length
// // // console.log(fullName.length);

// // // //string methods
// // // console.log(fullName.toUpperCase());
// // // let NameLow = fullName.toLowerCase();
// // // console.log(NameLow, fullName);

// // // let index = email.indexOf("@")
// // // console.log(index);

// // // //common string methods
// // // let result = email.lastIndexOf("n");
// // // // let result = email.slice(2,5);
// // // // let result = email.substr(4,10);
// // // // let result = email.replace("m", "w");
// // // // let result = email.replace("n", "w")

// // // console.log(result)

// // // let radius = 10;
// // // const pi = 3.14;

// // // console.log(radius, pi)
// // // math operators +, -, *, /, **, %

// // // console.log(10/2);
// // // let result = radius % 3;
// // // let result = pi * radius**2

// // // let likes = 10;
// // // likes = likes + 1;
// // // likes++;
// // // likes--;
// // // likes += 10;
// // // likes -= 5;
// // // likes *= 20;
// // // likes /= 2;

// // // console.log(likes);

// // // NaN - not a number

// // // console.log(5 / "hello");

// // // let result = "the blog has " + likes + " likes";
// // // console.log(result);

// // //template strings
// // // const title = "Best reads of 2019";
// // // const author = "Mario";
// // // const likes = 30;

// // // concatenation way
// // // let result = "the blog called " + title + " by " + author + " has " + likes + " likes";
// // // console.log(result);

// // // //template string way
// // // let result = `the blog called ${title} by ${author} has ${likes} likes`;
// // // console.log(result);

// // //creating html templates
// // // let html = `
// // //     <h2>${title}</h2>
// // //     <p>By ${author}</p>
// // //     <span>this blog has ${likes} likes</span>
// // // `;

// // // console.log(html);

// // //arrays
// // // let ninjas = ['shaun', 'ryu', 'chun-li'];

// // // ninjas[1] = 'ken';
// // // console.log(ninjas[1]);

// // // let ages = [20,25,30,35];
// // // console.log(ages[2]);

// // // let random = ['shaun', 'crystal', 30, 20];
// // // console.log(random);

// // // console.log(ninjas.length);

// // //array methods

// // // let result = ninjas.join(",");
// // // let result = ninjas.indexOf("chun-li");
// // // let result = ninjas.concat(['ken', 'crystal']);
// // // let result = ninjas.push('ken');
// // // result = ninjas.pop();


// // // console.log (ninjas)
// // // console.log(result);

// // //null & undefined

// // // let age;
// // // let age = null;

// // // console.log(age, age + 3, `the age is ${age}`);

// // //booleans & comparisons
// // // console.log(true, false, 'true', 'false');
// // // let email = 'luigi@thenetninja.co.uk';
// // // let names = ['mario', 'luigi', 'toad'];

// // // let result = email.includes('@')
// // // let result = email.includes('!')
// // // let result = names.includes('luigi');
// // // let result = names.includes('bowser');

// // // console.log(result);

// // //comparison operators
// // // let age = 25;

// // // console.log(age == 25);
// // // console.log(age == 30);
// // // console.log(age != 30);
// // // console.log(age > 20);
// // // console.log(age < 20);
// // // console.log(age <= 25);
// // // console.log(age >- 25);

// // // let name = 'william';

// // // console.log(name =='william');
// // // console.log(name == 'William');
// // // console.log(name > 'crystal');
// // // console.log(name > 'William');
// // // console.log(name > 'Crystal');

// // //loose comparison (different types can still be equal)

// // // console.log(age == 25);
// // // console.log(age == '25');
// // // console.log(age != 25);
// // // console.log(age != '25');

// // //strict comparison (different types cannot be equal)

// // // console.log(age === 25);
// // // console.log(age === '25');
// // // console.log(age !== 25);
// // // console.log(age !== '25');

// // //type conversion
// // // let score = '100';

// // // score = Number(score);
// // // console.log(score + 1);
// // // console.log(typeof score);

// // // let result = Number('hello');
// // // let result = String(50);
// // // let result = Boolean(100);
// // // let result = Boolean(0);
// // // let result = Boolean('0');
// // // let result = Boolean('0')
// // // let result = Boolean('');


// // // console.log(result, typeof result);

// // //for loops

// // // for(let i = 0; i < 5; i++){
// // //     console.log('in loop', i);
// // // }

// // // console.log('loop finished')

// // // const names = ['shaun', 'mario', 'luigi'];
// // // for(let i = 0; i < names.length; i++){
// // //     // console.log(i);
// // //     // console.log(names[i]);
// // //     let html = `<div>${names[i]}</div>`
// // //     console.log(html)
// // // }

// // //while loops

// // // const names = ['shaun', 'mario', 'luigi'];
// // // // let i = 0;
// // // // while(i < 5){
// // // //     console.log('in loop: ', i);
// // // //     i++;
// // // // }

// // // let i = 0;
// // // while(i < names.length){
// // //     console.log(names[i]);
// // //     i++;
// // // }

// // //do while loops

// // // let i = 3;
// // // do{
// // //     console.log('val of i is ', i);
// // //     i++
// // // } while(i < 5);

// // //if statements

// // // const age = 25;

// // // if(age > 20){
// // //     console.log('you are over 20 years old')
// // // }

// // // const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// // // if(ninjas.length > 3){
// // //     console.log("that's a lot of ninjas");
// // // }

// // //else if statements & logical operatiors - OR || and AND &&

// // // const password = 'p@ssword1234';
// // // if (password.length >= 12 && password.includes('@')){
// // //     console.log('that password is mighty strong');
// // // } else if(password.length >= 8 || password.includes('@') && password.length >= 5){
// // //     console.log('that password is strong enough');
// // // } else{
// // //     console.log('password is not strong enough');
// // // }

// // //logical NOT (!)

// // // let user = false;

// // // if(!user){
// // //     console.log("you must be logged in to continue");
// // // }
// // // console.log(!true);
// // // console.log(!false);

// // //break and continue

// // // const scores = [50, 25, 0, 30, 100, 20, 10];

// // // for(let i = 0; i < scores.length; i++){

// // //     if(scores[i] === 0){
// // //         continue;
// // //     }

// // //     console.log('your score: ', scores[i]);

// // //     if(scores[i] === 100){
// // //         console.log('congrats, you got the top score');
// // //         break;
// // //     }
// // // }

// // //switch statements

// // // const grade = 'C';

// // // switch(grade){
// // //     case 'A':
// // //         console.log('you got an A!');
// // //         break;
// // //     case 'B':
// // //         console.log('you got an B!');
// // //         break;
// // //     case 'C':
// // //         console.log('you got an C!');
// // //         break;
// // //     case 'D':
// // //         console.log('you got an D!');
// // //         break;
// // //     case 'E':
// // //         console.log('you got an E!');
// // //         break;
// // //     default:
// // //         console.log('not a valid grade');
// // // }

// // //variables & block scope
// // // let age = 30;

// // // if(true){
// // //     let age = 40;
// // //     let name = 'william';
// // //     console.log('inside 1st code block: ', age, name);
    
// // //     if(true){
// // //         let age = 50;
// // //         console.log('inside 2nd code block: ', age);
// // //         var test = 'hello';
// // //     }
// // // }

// // // console.log('outside code block: ', age, name, test);

// // // //function declaration
// // // function greet(){
// // //     console.log('hello there');
// // // }

// // // //function expression
// // // const speak = function(){
// // //     console.log('good day');
// // // };

// // // greet();
// // // greet();
// // // greet();

// // // speak();
// // // speak();
// // // speak();

// // //function declaration (hoist)
// // // function greet(){
// // //     console.log('hello there');
// // // }

// // //arguments & parameters

// // // const speak = function(name = 'luigi', time = 'night'){
// // //     console.log(`good ${time} ${name}`);
// // // };

// // // speak();
// // // speak('mario')
// // // speak('mario', 'morning');

// // //returning values

// // // const calcArea = function(radius){
// // //     // let area = 3.14 * radius**2;
// // //     // return area;
// // //     return 3.14 * radius**2;
// // // };

// // // const area = calcArea(5);
// // // console.log(area);

// // // const calcVol = function(area){

// // // };

// // // calcVol(area);

// // //arrow function
// // //if no parameters or more than one, use ()
// // // const calcArea = radius => 3.14 * radius**2;

// // // const area = calcArea(5)
// // // console.log('area is: ', area);

// // // const greet = () => 'hello, world';
// // // const result = greet();
// // // console.log(result);

// // // const bill = (products, tax) => {
// // //     let total = 0;
// // //     for(let i = 0; i < products.length; i++){
// // //         total += products[i] + products[i] * tax;
// // //     }
// // //     return total;
// // // }

// // // console.log(bill([10,15,30], 0.2));

// // // const name = 'william';
// // // //functions
// // // const greet = () => 'hello';

// // // let resultone = greet();
// // // console.log(resultOne);

// // // //methods

// // // let resultTwo = name.toUpperCase();
// // // console.log(resultTwo);

// // //callbacks & foreach

// // // const myFunc = (callbackFunc) => {
// // //     // do something
// // //     let value = 50;
// // //     console.log('yknow');
// // //     callbackFunc(value);
// // // };

// // // myFunc(value => {
// // //     //do something
// // //     console.log(value);
// // // });

// // // let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// // // const logPerson = (person, index) => {
// // //     console.log(`${index} - hello ${person}`);
// // // };

// // // people.forEach(logPerson);

// // // //get a reference to the 'u1'
// // // const u1 = document.querySelector('.people');

// // // const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// // // let html = ``;

// // // people.forEach(person => {
// // //     // create html template
// // //     html += `<li style="color: purple">${person}</li>`;
// // // }) 

// // // console.log(html);
// // // u1.innerHTML = html;

// // // object literals

// // const blogs  = [
// //     {title: 'why mac & cheese rules', likes: 20},
// //     {title: '10 things to make with marmite', likes: 50}
// // ];

// // console.log(blogs);

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: [
//         {title: 'why mac & cheese rules', likes: 20},
//         {title: '10 things to make with marmite', likes: 50}
//     ],
//     // blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     // login: function(){
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out')
//     },
//     logBlogs(){
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             // console.log(blogs);
//             console.log(blog.title, blog.likes);
//         });
//     }
// };

// // console.log(user);
// // console.log(user.name);

// // // user.age = 35;
// // console.log(user.age);

// // console.log(user['email']);
// // user['name'] = 'chun-li'
// // console.log(user['name']);

// // console.log(typeof user);

// // user.login();
// // user.logout();
// user.logBlogs();
// // console.log(this);

//Math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.6;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

//random numbers
// const random = Math.random();

// console.log(random);
// console.log(Math.round(random));
// console.log(Math.round(random * 100));

//primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
// scoreOne = 100
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values

// const userOne = { name: 'ryu', age: 30 };
// const userTwo = userOne;

// console.log(userOne, userTwo);
// userOne.age = 40;
// console.log(userOne, userTwo);



//THE DOM
// const para = document.querySelector('p');
// const para = document.querySelector('.error');

// // const para = document.querySelector('div.error');
// // const para = document.querySelector('body > div.error');

// console.log(para)

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');
// // console.log(paras);
// // console.log(paras[0]);
// // console.log(paras[2]);
// console.log(errors);

// paras.forEach(para => {
//     console.log(para);
// });

//get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// //get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
// //cannot use forEach

// //get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

//modifying querys

// const para = document.querySelector('p');

// // console.log(para.innerText);
// // para.innerText = 'ninjas are awesome!';
// // para.innerText += 'ninjas are awesome!';

// const paras = document.querySelectorAll('p');

// // paras.forEach(para => {
// //     console.log(para.innerText);
// //     para.innerText += ' new text';
// // })

// const content = document.querySelector('.content');

// // console.log(content.innerHTML);
// // content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// })

//getting and changing attributes

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www,thenetninja.co.uk');
// link.innerText = 'The Net Ninja Website';

// const mssg = document.querySelector('p'); 

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class','cool'); 
// mssg.setAttribute('style', 'color: green;'); 

// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';

//getting and changing classes

// const content = document.querySelectorAll('p')
// content[2].classList.add('error'); 
// console.log(content[2].classList);
// content[2].classList.remove('error'); 
// console.log(content[2].classList);

//challenge
//works but could have been done in fewer lines using textContent.includes()

// const content = document.querySelectorAll('.challenge');
// content.forEach(entry => {
//     words = entry.innerHTML.split(' ');
//     for(let i = 0; i < words.length; i++){
//         let successcheck = words[i].includes('success');
//         let errorcheck = words[i].includes('error');  
//         if (successcheck){
//             entry.classList.add('success')
//         }
//         else if (errorcheck){
//             entry.classList.add('error');
//         }
//         else{
//             continue
//         }
//     };
// })

// //toggling classes
// const content = document.querySelector('.content')
// content.classList.toggle('success');
// content.classList.toggle('success');