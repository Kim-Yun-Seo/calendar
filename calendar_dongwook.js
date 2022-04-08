const MonthsData2 = [
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
const currentYear2 = 2020;

// type 0 ////////////////////////////////
{
  const monthArray = [];

  for (let month = 0; month < MonthsData2.length; month++ ) {
    const dateArray = [];
    const firstDate = `${currentYear2}, ${MonthsData2[month].value}, 1`;
    const firstDateObject = new Date(firstDate);
    const getDay = firstDateObject.getDay();

    for(let emptyDay = 0; emptyDay < getDay; emptyDay++) {
      dateArray.push(0);
    }
    for(let day = 0; day < MonthsData2[month].hasDate; day++) {
      dateArray.push(day+1);
    }
    monthArray.push(dateArray);
  }
  console.log('monthArray = ', monthArray);
}










// type 1 ////////////////////////////////
{
  const makeDate = [];

  MonthsData2.forEach((month) => {
    const day = new Date(`${currentYear2}, ${month.value}, 1`).getDay();
    const dateArray = [];
    let empty = 0;
    let increase = 0;
    
    while (empty < day) {
      dateArray.push('');
      empty++;
    }
    while (increase < month.hasDate) {
      increase++;
      dateArray.push(increase)
    }
    makeDate.push(dateArray);
  })
  console.log('type 1 solution = ', makeDate)
}








// type 2 ////////////////////////////////
{
  const makeDate = [];

  MonthsData2.forEach((month) => {
    const day = new Date(`${currentYear2}, ${month.value}, 1`).getDay();
    const emptyDates = Array(day).fill(0);
    const dates = Array(month.hasDate).fill().map((_, index) => index + 1);
    
    makeDate.push([...emptyDates, ...dates]);
  })
  console.log('type 2 solution = ', makeDate)
}










// type 3 ////////////////////////////////
{
  const makeDate = MonthsData2.map(month => {
    const day = new Date(`${currentYear2}, ${month.value}, 1`).getDay();
    const emptyDates = Array(day).fill(0);
    const dates = Array(month.hasDate).fill().map((_, index) => index + 1);
    
    return [...emptyDates, ...dates]
  })
  console.log('type 3 solution = ', makeDate)
}









// type 4 ////////////////////////////////
{
  const range = (zero, start, end) => [...Array(zero).fill(0), ...Array(end - start + 1).fill().map((_, idx) => start + idx)];

  const makeDate = MonthsData2.map(month => range(new Date(`${currentYear2}, ${month.value}, 1`).getDay(), 1, month.hasDate));
  
  console.log('type 4 solution', makeDate);
}

