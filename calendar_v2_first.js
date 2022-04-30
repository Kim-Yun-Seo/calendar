'use strict';

const monthsInfoData = [
  { value: 1, name: 'January', endDate: 31 },
  { value: 2, name: 'month', endDate: 28 },
  { value: 3, name: 'month', endDate: 31 },
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
const currentYear = 2022;
const currentMonth = 7;
monthsInfoData[1].endDate = (currentYear % 4 === 0 && currentYear % 100 !== 0 || currentYear % 400 === 0) ? 29 : 28;
//뭐를 이용해서 어떻게 뭐를 얼마나 결과
//? ? 2월달날짜 2월의 길이만큼 한배열안에 2월싹다 들어가기가 하나.
const monthDate = [];
const monthFirstDay = new Date(`${currentYear}-${currentMonth}-1`).getDay();
const monthLastDay = new Date(`${currentYear}-${currentMonth}-${monthsInfoData[currentMonth - 1].endDate}`).getDay();
const frontEmptyArray = Array(monthFirstDay).fill('');
const backEmptyArray = Array(6 - monthLastDay).fill('');

for (let i = 1; i <= monthsInfoData[currentMonth - 1].endDate; i++) {
  monthDate.push(i);
}
let month = [...frontEmptyArray, ...monthDate, ...backEmptyArray]
console.log('month = ', month);

let dom = document.getElementById('calendar');
let monthElement = `<div>`;
monthElement += `<h1>${currentMonth}월</h2>`;
monthElement += `<table>`;
monthElement += `<tr>`;
days.forEach((day) => {
  monthElement += `<th class="${day}">${day}</th>`;
});
monthElement += `</tr>`;
for (let i = 0; i < month.length / days.length; i++) {
  monthElement += `<tr>`;
  days.forEach((day, dayIndex) => {
    monthElement += `<td class="${day}">${month[dayIndex + (i * days.length)]}</td>`;
  });
  monthElement += `</tr>`;
}


monthElement += `</table>`;
monthElement += `</div>`;

dom.innerHTML = monthElement;