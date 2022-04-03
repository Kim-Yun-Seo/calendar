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
const makeDate = [];
const currentYear = '2020';

monthsData.forEach((month, index) => {
  const hasDate = month.hasDate;
  const data = [];
  const firstDate = `${currentYear}, ${month.value}, 1`
  const firstDateObject = new Date(firstDate);
  const getDay = firstDateObject.getDay();
  const day = getDay === 0 ? 7 : getDay;
  let empty = 1;
  let increase = 0;

  while (empty < day) {
    data.push(0);
    empty++;
  }
  while (increase < hasDate) {
    increase++;
    data.push(increase)
  }
  makeDate.push(data);
})

console.log('makeDate = ', makeDate)
