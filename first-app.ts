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

interface Credentials{
    mode: string
}

class AuthCredentials implements Credentials{
    mode: string;
    password: string;
    email: string;
    
}

function login(credentials: Credentials){

}

login(new AuthCredentials())

// creating merged types -> 
type Admin = {
    permissions: string[]
}

type AppUser = {
    userName: string
}

type AdminAppUser = Admin & AppUser;

let admin: AdminAppUser;

admin = {
    permissions: ["dev"],
    userName: "Cee"
}

// merging with interface

interface Admin2 {
  permissions: string[];
};

interface AppUser2 {
  userName: string;
};

interface  AdminAppUser2 extends Admin2, AppUser2{}


let admin2: AdminAppUser2;

admin2 = {
  permissions: ["dev"],
  userName: "Cee",
};
