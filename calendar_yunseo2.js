const calendarData = [
  {value: 1, name: 'January', endDate: 31},
  {value: 2, name: 'February', endDate: 28},
  {value: 3, name: 'March', endDate: 31},
  {value: 4, name: 'April', endDate: 30},
  {value: 5, name: 'May', endDate: 31},
  {value: 6, name: 'June', endDate: 30},
  {value: 7, name: 'July', endDate: 31},
  {value: 8, name: 'August', endDate: 31},
  {value: 9, name: 'September', endDate: 30},
  {value: 10, name: 'October', endDate: 31},
  {value: 11, name: 'November', endDate: 30},
  {value: 12, name: 'December', endDate: 31},
]
//윤년 표현 맘에 안 들어
//너무 길어 싫어 짧아지고 싶
//필요없는 변수 k,j,i 난무 -> 줄여

const calendar = [];
const currentYear = 2020;

calendarData[1].endDate = (currentYear % 4 == 0 && currentYear % 100 != 0 || currentYear % 400 == 0) ? 29 : 28
for (let i = 0; i < calendarData.length; i++) {
  const monthArray = [];
  let date = new Date(`${currentYear}-${calendarData[i].value}-1`);
  let day = date.getDay();

  for (let k = 0; k < day; k++) {
    monthArray.push('')
  }
  for (let j = 1; j <= calendarData[i].endDate; j++) {
    monthArray.push(j);
  }
  calendar.push(monthArray);
}
console.log('calendar =', calendar)