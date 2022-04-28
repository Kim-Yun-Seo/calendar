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

let dom = document.getElementById('calendar');
//뭐로 어떻게 어떤걸 얼마만큼 돌아서 뭐가 나오는지
//table 태그 만들건데, 

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
  //row 에서 td의 개수를 i가 7보다 작으면 td안에 날짜를 그린다.
  //2~마지막공백까지를 반복해서 row를 추가해서 7개씩 계속 쓸거야.
  monthElement += `<tr>`;
  for (let i = 0; i < month.length; i++) {
    if (i < 7) {
      monthElement += `<td>${month[i]}</td>`;
    };
  };
  monthElement += `</tr>`;
  monthElement += `<tr>`;
  for (let i = 0; i < month.length; i++) {
    if (i >= 7 && i < 14) {
      monthElement += `<td>${month[i]}</td>`;
    };
  };
  monthElement += `</tr>`;
  monthElement += `<tr>`;
  for (let i = 0; i < month.length; i++) {
    if (i >= 14 && i < 21) {
      monthElement += `<td>${month[i]}</td>`;
    };
  };
  monthElement += `</tr>`;
  monthElement += `<tr>`;
  for (let i = 0; i < month.length; i++) {
    if (i >= 21 && i < 28) {
      monthElement += `<td>${month[i]}</td>`;
    };
  };
  monthElement += `</tr>`;
  monthElement += `<tr>`;
  for (let i = 0; i < month.length; i++) {
    if (i >= 28 && i < 35) {
      monthElement += `<td>${month[i]}</td>`;
    };
  };
  monthElement += `</tr>`;
  monthElement += `<tr>`;
  for (let i = 0; i < month.length; i++) {
    if (i >= 35) {
      monthElement += `<td>${month[i]}</td>`;
    };
  };
  monthElement += `</tr>`;
  monthElement += ``;
  
  monthElement += `</table>`;
  monthElement += `</div>`;
  monthElement += ``;

  return monthElement
});

dom.innerHTML = calendar.join('');