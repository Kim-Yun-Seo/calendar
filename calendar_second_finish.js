'use strict';

const monthsInfoData = [
  { value: 1, name: 'January', endDate: 31 },
  { value: 2, name: 'February', endDate: 28 },
  { value: 3, name: 'March', endDate: 31 },
  { value: 4, name: 'April', endDate: 30 },
  { value: 5, name: 'May', endDate: 31 },
  { value: 6, name: 'June', endDate: 30 },
  { value: 7, name: 'July', endDate: 31 },
  { value: 8, name: 'August', endDate: 31 },
  { value: 9, name: 'September', endDate: 30 },
  { value: 10, name: 'October', endDate: 31 },
  { value: 11, name: 'November', endDate: 30 },
  { value: 12, name: 'December', endDate: 31 },
];
const days = ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'];
const year = 2022;
monthsInfoData[1].endDate = (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
const calendarData = monthsInfoData.map((month) => {
  const datesArray = Array(month.endDate).fill().map((_, index) => index + 1);
  const firstDay = new Date(`${year}-${month.value}-1`).getDay();
  const lastDay = new Date(`${year}-${month.value}-${month.endDate}`).getDay();
  const frontEmptyArray = Array(firstDay).fill('');
  const backEmptyArray = Array(6 - lastDay).fill('');
  
  return [ ...frontEmptyArray, ...datesArray, ...backEmptyArray];
});
console.log('calendar = ', calendarData);
//뭐로 어떻게 뭐를 얼마나 결과

let dom = document.getElementById('calendar');
let calendar = calendarData.map((month, monthIndex) => {
  let monthElement = ``;
  monthElement += `<div>`;
  monthElement += `<h1>${monthIndex + 1}월</h1>`;
  monthElement += `<table>`;
  monthElement += `<tr>`;
  days.forEach((day, dayIndex) => {
    monthElement += `<th>${day}</th>`;
  })
  monthElement += `</tr>`;
  for (let i = 0; i < month.length / 7; i++) {
    monthElement += `<tr>`;
    days.forEach((day2, dayIndex2) => {
    //0번째 줄은 month를 0번인덱스부터 6번까지 tr td 덩어리를 만든다. *0 = (0 * 7)
    //1번째 줄은 month를 7번인덱스부터 13번까지 tr td 덩어리를 만든다. *7 = (1 * 7)
    //2번째 줄은 month를 14번인덱스부터 20번까지 tr td 덩어리를 만든다. *14
    //3번째 줄은 month를 21번인덱스부터 27번까지 tr td 덩어리를 만든다. *21
    //4번째 줄은 month를 28번인덱스부터 34번까지 tr td 덩어리를 만든다. 
    //5번째 줄은month를 35번인덱스부터 41번까지 tr td 덩어리를 만든다. 
    //month, monthIndex, day2, dayIndex2, i
      monthElement += `<td>${month[dayIndex2 + (7 * i)]}</td>`;
    });
    monthElement += `</tr>`;
  };
  monthElement += `</table>`;
  monthElement += `</div>`;

  return monthElement;
});
dom.innerHTML = calendar;