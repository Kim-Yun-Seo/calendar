const month = [
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
  'December',
];

const thirty = [];
for(let i = 1; i < 31; i++) {
  thirty.push(i);
}

const thirtyOne = [];
for(let i = 1; i < 32; i++) {
  thirtyOne.push(i);
}

const twentyEight = [];
for(let i = 1; i < 29; i++) {
  twentyEight.push(i);
}
const date = {
  // January : thirtyOne,
  // February : twentyEight,
};
const monthArray = [];
let dateArray = [];

for (let i = 0; i < month.length; i++ ) {
  if (
    month[i] === 'February') {
    dateArray = twentyEight;
  } else if ( 
    month[i] === 'April' ||
    month[i] === 'June' ||
    month[i] === 'September' ||
    month[i] === 'November' ) {
    dateArray = thirty;
  } else {
    dateArray = thirtyOne;
  }
  monthArray.push(dateArray);
}
console.log('monthArray = ', monthArray);

