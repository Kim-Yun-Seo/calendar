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
const currentYear = 2022;
const currentMonth = 2;


monthsInfoData[1].endDate = (currentYear % 4 === 0 && currentYear % 100 !== 0 || currentYear % 400 === 0) ? 29 : 28;
const calendarData = monthsInfoData.map((month) => {
  const datesArray = Array(month.endDate).fill().map((_, index) => index + 1);
  const firstDay = new Date(`${currentYear}-${month.value}-1`).getDay();
  const lastDay = new Date(`${currentYear}-${month.value}-${month.endDate}`).getDay();
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
  days.forEach((day) => {
    monthElement += `<th class="${day}">${day}</th>`;
  });
  monthElement += `</tr>`;
  for (let i = 0; i < month.length / days.length; i++ ) {
    monthElement += `<tr>`;
    days.forEach((day, dayIndex) => {
      monthElement += `<td class="${day}">${month[dayIndex + (i * days.length)]}</td>`;
    });
    monthElement += `</tr>`;
  }
  monthElement += `</table>`;
  monthElement += `</div>`;

  return monthElement;
})
dom.innerHTML = calendar;