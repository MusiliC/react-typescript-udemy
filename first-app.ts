let username: string;

username = "John Doe";

let numberType = 3;

let BooleanType = true;

// union types

let userId: string | number;

userId = "myId";
userId = 3;


// using custom type

type userType = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

// Object Types

// let user: {
//   name: string;
//   age: number;
//   isAdmin: boolean;
//   id: string | number;
// };

let user: userType


user = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  id: 100,
};

// Array Types

let hobbies: Array<string | number>;

hobbies = ["Reading", "Coding", 9];

// function types -> with return types

function add(a: number, b: number) {
  return a + b;
}

function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  return calcFn(a, b);
}

calculate(2, 4, add);

// custom types / type aliases

type Addfn = (a: number, b: number) => number;

function calculateTwo(a: number, b: number, calcFn: Addfn) {
  return calcFn(a, b);
}

calculate(2, 4, add);


// interface keyword

interface Credentials{
    password: string;
    email: string;
}

let creds; CredentialsContainer;

creds = {
 password: "my",
 email: "email@email.com"
}