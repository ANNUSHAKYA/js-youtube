// singleton
// Object.create

// object literals

// const mysym = Symbol("key1")

const JsUser = {
    name: "Annu",
    "full name": "Annu Shakya",
    // [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "annu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)
//console.log(JsUser[mySym])

JsUser.email = "annu@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "annu@microsoft.com"
// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS user");
}
JsUser.greetingsTwo = function(){
    console.log('Hello JS user, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());