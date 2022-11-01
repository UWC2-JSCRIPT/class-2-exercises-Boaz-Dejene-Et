// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const object = {
  firstName: "Boaz",
  lastName: "Dejene",
  'favorite food': "Buger",
  bestFriend: {
    firstName: "David",
    lastName: "Micheal",
    'favorite food': "Pizza",
  }
}


// 2. console.log best friend's firstName and your favorite food
console.log(
  object.bestFriend.firstName,
  object["favorite food"]
)


// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const array = [
  ["-", "O", "-"],
  ["-", "X", "O"],
  ["X", "-", "X"],
]


// 4. After the array is created, 'O' claims the top right square.
// Update that value.

array[0][2] = "O"

// 5. Log the grid to the console.

console.log(array)

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const email = "foo@bar.baz";

const vgv = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const matchs = 'foo@bar.baz'.match(vgv);

console.log(matchs)

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const [month, day, year] = assignmentDate.split('/');

const date = new Date(+year, +month - 1, +day);

console.log(date)


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

date.setDate(date.getDate() + 7)

console.log(date)

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const timeTag = `<time datetime={${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}}>${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}</time>`;
document.getElementById("timeTag").innerHTML = timeTag;

// 10. log this value using console.log

console.log(months[date.getMonth()], date.getDate(), date.getFullYear())
