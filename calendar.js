// 바꾸고 싶은 리스트 
// ---- for문 너무 많이돌고 5
// 비교문 너무 많고
// ---- 상수 너무 많고 5
// 변수 너무 많음 

const monthsData = [
  { value: 1, name: 'January', hasDate: 31 },
  { value: 2, name: 'February', hasDate: 28 },
  { value: 3, name: 'March', hasDate: 31 },
  { value: 4, name: 'April', hasDate: 30 },
  { value: 5, name: 'May', hasDate: 31 },
  { value: 6, name: 'June', hasDate: 30 },
  { value: 7, name: 'July', hasDate: 31 },
  { value: 8, name: 'August', hasDate: 31 },
  { value: 9, name: 'September', hasDate: 30 },
  { value: 10, name: 'October', hasDate: 31 },
  { value: 11, name: 'November', hasDate: 30 },
  { value: 12, name: 'December', hasDate: 31 },
];

const monthArray = [];

for (let month = 0; month < monthsData.length; month++ ) {
  let dateArray = [];

  for(let day = 0; day < monthsData[month].hasDate; day++) {
    dateArray.push(day+1);
  }
  monthArray.push(dateArray);
}
console.log('monthArray = ', monthArray);
