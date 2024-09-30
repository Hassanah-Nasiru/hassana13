let x = 10
let y = 15
    z = x + y

 let a = 7
 let b = 20
    c = b - a

let p = 5
let q = 6
    r = p * q

let e = 50
let f = 10
    g = e / f
    console.log(z, c, r, g)

let name = 3
    name += 2
 console.log(name)

let total = 100
    total -= 25
console.log(total) 

let quantity = 8
 quantity *= 3
console.log(quantity)

let price = 50
    price /= 2
console.log(price)

let remainder = 15
    remainder %= 7
console.log(remainder)

let s = 10
let t = "10"
   d = s==t
    console.log(d)

let svn = 7
let five = 5
    tr = 7 != 5
console.log(tr)

let aa = "apple"
let bb = "banana"
    fruit = aa==bb
console.log(fruit)

let itsRaining = false
let haveUmrella = false
let haveBoot = true
    soln = itsRaining || haveUmrella || haveBoot
    console.log(soln)
    
let sunny = true
    ans = !sunny
    console.log(ans)

let num1 = 10
let num2 = 5
    answer = num1>num2 && num2<num1
    console.log(answer)

// function checkWords(a , b){
    
// }

let MyArray = [1,2,3]
let MyArray2 = [6,7,8,9]
let removedMyArray = MyArray.shift()
console.log(MyArray)
MyArray.unshift(1, 5)
MyArray.splice(2,2,'a','b')
console.log(MyArray)
MyArray = MyArray.concat(MyArray2)
console.log(MyArray)
let includeMyArray = MyArray.includes(a)
console.log(includeMyArray)

let number = [2,4,1,5,6,3]
const result = number.find((num) => num < 4)
console.log(result)
number.sort((a,b)=> a-b)
console.log(number)
number.sort((a,b)=> b-a)
console.log(number)

const Numbers = [1,2,6,7,13]
let numbers = Numbers.map((num)=>num*num)
console.log(numbers)

const fruits = ["banana","apple","grape"]
fruits.sort()
console.log(fruits)

//reduce()
const numbers2 = [6, 2, 6];
const sum = numbers2.reduce((accumulator, currentValue, indexOfCurrentValue, totalArrayElement) => accumulator + currentValue,);
console.log(sum)

//filter()
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers3.filter(function(number) {
    return number % 2 === 0;
  });
  console.log(evenNumbers); 

  const numbers4 = [6, 8, 4, 1, 5, 3, 7, 2, 9, 10]; 
  let newnumbers4 = numbers4.filter((item)=> item < 10)
  console.log(newnumbers4)
  newnumbers4.sort((a,b)=> a - b)
  console.log(newnumbers4);

  let arr = [3, 4, 5]
  arr.push(7)
  console.log(arr);
  arr.length = 3
  arr.pop()






