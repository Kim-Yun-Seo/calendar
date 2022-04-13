const monthsInfoData = [
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
];
const calendarData = [];
let year = 2020

monthsInfoData[1].endDate = (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? 29 : 28
for (let i = 0; i < monthsInfoData.length; i++) {
  const monthDateArray = [];
  let firstDateObject = new Date(`${year}-${i+1}-1`);
  let firstDay = firstDateObject.getDay()
  let empty = 0;
  while (empty < firstDay) {
    empty++;
    monthDateArray.push('')
    
  }
  for (let date = 1; date <= monthsInfoData[i].endDate; date++) {
    monthDateArray.push(date)
  }
  calendarData.push(monthDateArray)
}
console.log(calendarData);