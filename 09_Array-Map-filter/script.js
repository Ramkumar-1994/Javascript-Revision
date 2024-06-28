let arr=[1,2,3,4,5,6]

let square=arr.map((n)=>
{
  return n**2
})

console.log(square)

const users = [
  {
    name: "Ravi Kumar",
    email: "ravi.kumar@example.com",
    gender: "Male",
    age: 35,
    salary: 60000
  },
  {
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    gender: "Female",
    age: 28,
    salary: 55000
  },
  {
    name: "Amit Singh",
    email: "amit.singh@example.com",
    gender: "Male",
    age: 42,
    salary: 75000
  },
  {
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    gender: "Female",
    age: 31,
    salary: 62000
  },
  {
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    gender: "Male",
    age: 29,
    salary: 58000
  },
  {
    name: "Anjali Mishra",
    email: "anjali.mishra@example.com",
    gender: "Female",
    age: 37,
    salary: 68000
  },
  {
    name: "Vivek Gupta",
    email: "vivek.gupta@example.com",
    gender: "Male",
    age: 45,
    salary: 80000
  },
  {
    name: "Neha Sharma",
    email: "neha.sharma@example.com",
    gender: "Female",
    age: 25,
    salary: 50000
  }
];

console.log(users);

let userName=users.map((user)=>
{
  return user.name
})

console.log(userName)

let highSalaryUser=users.filter((user)=>
{
  return user.salary>60000
}).map((user)=>user.name)

console.log(highSalaryUser)