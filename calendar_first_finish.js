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

  return [...frontEmptyArray, ...datesArray, ...backEmptyArray];
})
console.log('calendar = ', calendarData);

let dom = document.getElementById('calendar');
console.log('dom = ', dom);

let calendar = calendarData.map((month, monthIndex) => {
  let oneLineMonthElement = ``;
  
  oneLineMonthElement += `<div>`;
  oneLineMonthElement += `  <h1>${monthIndex + 1}월</h1>`;
  oneLineMonthElement += `  <table>`;
  oneLineMonthElement += `    <tr>`;
  days.forEach(day => {
    oneLineMonthElement += `    <th>${day}</th>`;
  });
  oneLineMonthElement += `    </tr>`;
  for (let i = 0; i < month.length / days.length; i++ ) {
    oneLineMonthElement += `  <tr>`;
    days.forEach((day, dayIndex) => {
      oneLineMonthElement += `  <td>${month[dayIndex + i * days.length]}</td>`;
    });
    oneLineMonthElement += `  </tr>`;
  }
  oneLineMonthElement += `  </table>`;
  oneLineMonthElement += `</div>`;
  return oneLineMonthElement;
});
dom.innerHTML = calendar.join('');

// console.log('calendar = ', calendar);


