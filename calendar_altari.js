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
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const checkLeapYear = (year) => {
  let isLeapYear = false;

  if (year % 4 === 0) {
    if(year % 400 !== 0 && year % 100 === 0) {
      isLeapYear = false;
    } else {
      isLeapYear = true;
    }
  }
  return isLeapYear;
}
const calendarData = (currentYear) => {
  const yearDate = [];

  monthsData.forEach((month) => {
    const isLeapYear = checkLeapYear(currentYear);
    const hasDate = (month.value === 2 && isLeapYear) ? month.hasDate + 1 : month.hasDate;
    const monthData = [];
    const firstDate = `${currentYear}, ${month.value}, 1`;
    const firstDateObject = new Date(firstDate);
    const getDay = firstDateObject.getDay();
    const day = getDay === 0 ? 7 : getDay;
    let empty = 1;
    let increase = 0;
  
    while (empty < day) {
      monthData.push(0);
      empty++;
    }
    while (increase < hasDate) {
      increase++;
      monthData.push(increase);
    }
    yearDate.push(monthData);
  })
  return yearDate;
};

const displayCalendar = (year, month) => {
  const currentMonth = calendarData(year)[month - 1];
  let table = ``;
  table += `<table>`;
  table += `  <tr>`;
  for (let i = 0; i < 5; i++) {
    days.forEach((day) => {
      if (day === 'Sun') {
        table += `  <th class="sunday">${day}</th>`;
      } else {
        table += `  <th>${day}</th>`;
      }
    }); 
  }
  table += `  </tr>`
  table += `  <tr>`;
  currentMonth.forEach((date) => {
    table += `  <td>${date}</td>`;
  });
  table += `  </tr>`;
  table += `</table>`;
  
  document.getElementById('year').innerHTML = year;
  document.getElementById('month').innerHTML = month;
  document.querySelector('.wrap').innerHTML = table;
}

const init = () => {
  displayCalendar(2022, 3);
}
init();

