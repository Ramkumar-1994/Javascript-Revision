let shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"]
];

// Tasks:

// 1. **Accessing Specific Value:**
//     - Write JavaScript code to fetch the first item in the grocery items list.

console.log(shoppingList[0])

// 2. **Implementing `push` Method:**
//     - Write JavaScript code to add "Carrots" to the end of the grocery items list. Log the updated grocery items list.

shoppingList.push('Carrots')
console.log(shoppingList)


// 3. **Implementing `pop` Method:**
//     - Write JavaScript code to remove the last item from the grocery items list. Log the updated grocery items list before and after the removal.

shoppingList.pop()
console.log(shoppingList)

// 4. **Implementing `splice` Method:**
//     - Write JavaScript code to remove "Tomatoes" and "Onions" from the grocery items list, and add "Cucumbers" and "Bell Peppers" in their place. Log the updated grocery items list before and after the splice operation.

shoppingList[4].splice(1,2,'Cucumber','Bell Peppers')
console.log(shoppingList)

// Problem
let student = {
  name: "Amit",
  age: 20,
  grade: "A",
  address: {
      street: "123 Main St",
      city: "Anytown",
      country: "India"
  }
};

// 1. **Fetching Specific Value:**
//     - Write JavaScript code to fetch the student's name.

console.log(student.name)

// 2. **Adding Value:**
// - Write JavaScript code to add a new property **`phone`** with the value **`"123-456-7890"`** to the student object. Log the updated student object.

student['phone']='123-456-7890'

console.log(student)

// 3. **Removing Value:**
//     - Write JavaScript code to remove the **`grade`** property from the student object. Log the updated student object before and after the removal.

delete student.grade

console.log(student)

// 4. **Modifying Value:**
// - Write JavaScript code to modify the student's age to **`21`**. Log the updated student object.

student.age=21
console.log(student)

// Conditionals assignment

// - **Task 1: Understanding `if` Statements:**
//     - Write a JavaScript function that takes a number as input and returns "Positive" if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.

function whatNumber(number)
{
  if(number===0)
    {
       console.log('Zero') 
    }
  else if(number>0)
    {
      console.log('Positive')
    }
  else
  {
    console.log('Negative')
  }
}

whatNumber(0)
whatNumber(8)
whatNumber(-8)

// - **Task 2: Implementing `else if` Statements:**
// - Create a JavaScript program that evaluates a student's grade based on their score. The program should output "A" if the score is between 90 and 100, "B" if it's between 80 and 89, "C" if it's between 70 and 79, "D" if it's between 60 and 69, and "F" if it's below 60.

function grade(score)
{
  if(score>=90 && score<=100)
    {
      console.log('A Grade')
    }
  else if(score>=80)
    {
      console.log('B Grade')
    }
  else if(score>=70)
    {
      console.log('C Grade')
    }
  else if(score>=60)
    {
      console.log('D Grade')
    }
  else{
    console.log('F Grade')
  }
}
grade(100)
grade(90)
grade(70)
grade(68)
grade(56)
grade(69)
grade(89)
grade(79)


// - **Task 3: Exploring Truthy/Falsy Concepts:**
//     - Write a JavaScript function that takes a string as input and returns "Truthy" if the string is not empty, "Falsy" otherwise.

function checkString(string)
{
  if(string==='' || string===undefined)
    {
      return 'Falsy'
    }
  else
  {
    return 'Truthy'
  }
}

console.log(checkString())
console.log(checkString(''))
console.log(checkString(" "))