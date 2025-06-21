// const bumbleUser = new Object()
const bumbleUser = {}

bumbleUser.id = "123abc"
bumbleUser.name = "Annu"
bumbleUser.isLoggedIn = false

// console.log(bumbleUser);

const regularUser = {
    email: "annu@gmail.com",
    fullname: {
        userfullname: {
            firstname: "annu",
            lastname: "shakya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// obj3 = {obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
console.log(bumbleUser);

console.log(Object.keys(bumbleUser));
console.log(Object.values(bumbleUser));
console.log(Object.entries(bumbleUser));

console.log(bumbleUser.hasOwnProperty('isLoggedIn'));