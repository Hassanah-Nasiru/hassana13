// filter and sort
const numbers4 = [6, 8, 4, 1, 5, 3, 7, 2, 9, 10]; 
let newnumbers4 = numbers4.filter((item)=> item < 10)
console.log(newnumbers4)
newnumbers4.sort((a,b)=> a - b)
console.log(newnumbers4);

// include and reduce
const MyName = ["Alice", "Ella" ,"Joy", "Amanda"]
const NameAlice = MyName.includes("Alice")
console.log(NameAlice);
const sum = MyName.reduce((accumulator, currentValue, indexOfCurrentValue, totalArrayElement) => accumulator + currentValue.length, 0);
console.log(sum);

// map and find
const books = [
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
    { title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling' },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' }
  ];
  
  // Create an array containing only the titles of books written by 'J.K. Rowling'
  const jkRowlingBooks = books.filter(book => book.author === 'J.K. Rowling').map(book => book.title);
  
  // Find the first book that has 'JavaScript' in the title
  const javascriptBook = books.find(book => book.title.includes('JavaScript'));
  
  // Print the results
  console.log('Titles of books by J.K. Rowling:', jkRowlingBooks);
  console.log('First book with JavaScript in the title:', javascriptBook);

// shift and unshift
let MyArr = ["Apple", "Banana", "Orange", "Grape"]
let removedElement = MyArr.shift("Apple");
console.log(MyArr); 
MyArr.unshift("Strawberry"); 
console.log(MyArr);

// push and pop
let color = ["Red", "cyan", "pink", "black"]
color.pop("black")
console.log(color);
color.push("indigo")
console.log(color);

// concat
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers3.filter(function(number) {
    return number % 2 === 0;
  });
  console.log(evenNumbers);
  const oddnumbers = numbers3.filter(function(number)
  {
    return number % 2 !== 0 ; 
  }) 
  console.log(oddnumbers);
  const mergedArray = evenNumbers.concat(oddnumbers)
  console.log(mergedArray);

  // splice and slice
  let Arraystudents = ["Joseph", "Isaac", "Alice", "Eve"]
  Arraystudents.splice(1,2)
  console.log(Arraystudents);
  Arraystudents.slice("Isaac", "Alice")
  console.log(Arraystudents);



  const student = {
    firstName: 'Nasiru',
    lastName: 'Hassana',
    age: 8,
    course: 'software-engineering',
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }};
    console.log(student.fullName());

    const nerm = Object.keys(student)
    console.log(student);
    student.age = 10
    console.log(Object.values(student));
    console.log(Object.entries(student));
    let myString = JSON.stringify(student)
    console.log(myString);
  
    let txt = ""; 
    for (let x in student) { 
      txt += student[x] + " ";
   } 
    console.log(txt);


    const numbers = [1, 2, 3, 4, 5];
     for (const number of numbers) { 
      console.log(number); 
    }
      // arrow function
// const functionName = (a, b, c) => a + b + c;
// const arr = arr.map(() => {})

// QUESTION ONE
    const sumOfFirstLast = (array) => {
      let first = Number(array.shift());
      let second = Number(array.pop());
      // arrayLength/2 + 1
      indexOfMiddleNum = 0;
      const evenFormula = (array.length / 2)
      let oddFormula = (array.length + 1) / 2
      //
      array.length % 2 == 0 ? indexOfMiddleNum = evenFormula : indexOfMiddleNum = oddFormula
      const middle = Number(array[indexOfMiddleNum])
      return first + second + middle
    }
    console.log(sumOfFirstLast(['20', '40', '70', '60', '13', '45']));

// QUESTION 2
    const dayChecker = (input) => {
    const daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
    const index = input - 1
    if(input > 7){
      return "Invalid"
    } else{
      return daysOfTheWeek[index]
    }
    }
    console.log(dayChecker(15));

// QUESTION 3
    const reverse = (n, array) => {
      let newArray = []
      let newString = ""
      let reduceValue = 1
      for (let a = 0; a < n; a++){
        // newArray.push(array[n-reduceValue])
       newString = newString + " " + array[n-reduceValue]
        reduceValue += 1      
      }
      // return newArray;
      return newString;
    }
    console.log(reverse(3, [2, 3, 4, 6, 7]));



  // QUESTION 4
  function reverseAndPrint(inputArray) {
    // Convert the space-separated strings to an array
    let originalArray = inputArray.split(" ");
  
    // Reverse the array
    let reversedArray = originalArray.reverse();
  
    // Print the reversed elements
    console.log("Reversed Elements:");
    for (let i = 0; i < reversedArray.length; i++) {
      console.log(reversedArray[i]);
    }
  }
  
  let inputString = "Hello! welcome to JavaScript class";
  reverseAndPrint(inputString);


  
  // QUESTION 5
  function sumEvenNumbers(stringsArray) {
    let sum = 0;
  
    for (let i = 0; i < stringsArray.length; i++) {
      // Parse the string to a number
      let number = parseFloat(stringsArray[i]);
  
      // Check if the parsed number is even
      if (!isNaN(number) && number % 2 === 0) {
        // Add the even number to the sum
        sum += number;
      }
    }
  
    return sum;
  }
  
  let inputArray = ["10", "5", "3", "8", "6", "12"];
  let result = sumEvenNumbers(inputArray);
  console.log("Sum of even numbers:", result);
  









  
  
