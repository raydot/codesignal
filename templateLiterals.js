/**
 * Excursion to try to solve this incredibly annoying question at
 * HackerRank:
 * https://www.hackerrank.com/challenges/js10-template-literals/problem
 *
 * Explanation from:
 * https://medium.com/javascript-in-plain-english/template-literals-in-javascript-the-complete-guide-e23f64c13aa1
 */

// Passing template literals into a function:

// this just logs "a person"
// function person() {
//   return `a person`;
// }

// Returns [ 'he is ', ' and ', ' years old' ]
function person(strings, name, age) {
  console.log(strings);
  return 'a person';
}

const name = `Max`;
const age = 21;

const description = person`he is ${name} and ${age} years old`;

console.log(description);

// Just logs "a person."  Let's improve!

// Defining a function
const personTemplate = templateGenerator`
<div id="person-wrapper">
    <h3>${`name`}</h3>
    <p>Age: ${`age`} years</p>
</div>    
`;

const john = {
  name: 'John Fon',
  age: 34,
};

const johnsTemplate = personTemplate(john);

console.log(johnsTemplate);

// The generator itself:
function templateGenerator(strings, ...keys) {
  return function (data) {
    let template = strings.slice();

    keys.forEach((key, i) => {
      template[i] = template[i] + data[key];
    });
    console.log('template', template);
    return template.join('');
  };
}
