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
const year = 2022
const calendarData = monthsInfoData.map(month => [
  ...Array(new Date(`${year}-${month.value}-1`).getDay()).fill(''), 
  ...Array(month.endDate).fill().map((_, index) => index + 1), 
  ...Array(6-new Date(`${year}-${month.value}-${month.endDate}`).getDay()).fill('')
]);
console.log('calendarData = ', calendarData);