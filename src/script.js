// Level 1
// Exercici 1

let multiply = (num1, num2) => num1 * num2;

let toCelsius = fahrenheit => (5 / 9) * (fahrenheit - 32);

let padZeros = (num, totalLen) => {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}

let power = (base, exponent) => {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

let greet = who => console.log("Hello " + who);

// Exercisi 2
// We can find the problem in the order of the events. First, we need to declare the variable.
var users =
    [{ firstName: 'Homer', lastName: 'Simpson' },
    { firstName: 'Marge', lastName: 'Simpson' },
    { firstName: 'Bart', lastName: 'Simpson' },
    { firstName: 'Lisa', lastName: 'Simpson' },
    { firstName: 'Maggie', lastName: 'Simpson' }];

//Then, we use map to create a new array
users.map(function (user) {
    user.firstName;
});

// Exercisi 3
var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
var result = epic.reduce((total, currentValue) => `${total} ${currentValue}`);
console.log(result);

//Exercisi 4
let string = sentence => console.log([...sentence].reverse().join(""));
string("Hello Ainhoa");

//Exercisi 5

async function a() {
    let b = new Promise((resolve, reject) => {
        setTimeout(() => resolve("I've done the task"), 1000)
    });

    let doMoreWork = result => console.log(`${result}. Now I'll continue working.`);
    let promise = await b;
    doMoreWork(promise);
}
a();

//Exercisi 6
var tasks = [
    {
        'name': 'Start React web',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on facebook',
        'duration': 240
    }
];
//With forEach:
let newArr = [];
tasks.forEach(item => newArr.push(item.name));
console.log(newArr);

//With Map:
let task = tasks.map(item => item.name);
console.log(task);