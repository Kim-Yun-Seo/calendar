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

{ 
  let year = 2022;

  const calendarData = monthsInfoData.map((month) => {
    const firstDay = new Date(`${year}-${month.value}-1`).getDay();
    const lastDay = new Date(`${year}-${month.value}-${month.endDate}`).getDay()
    const frontEmptyArray = Array(firstDay).fill('');
    const backEmptyArray = Array(6-lastDay).fill('')
    const datesArray = Array(month.endDate).fill().map((_, index) => index + 1);

    return[...frontEmptyArray, ...datesArray, ...backEmptyArray]
  })
  console.log('calendar = ', calendarData);
}
{ 
  let year = 2022;

  const calendarData = monthsInfoData.map((month) => {
    const firstDay = new Date(`${year}-${month.value}-1`).getDay();
    const emptyArray = Array(firstDay).fill('');
    const datesArray = Array(month.endDate).fill().map((_, index) => index + 1);

    return[...emptyArray, ...datesArray]
  })
  console.log('calendar = ', calendarData);
}
{ 
  // const calendarData = [];
  // let year = 2022;
  // monthsInfoData.forEach((month) => {
  //   let firstDay = new Date(`${year}-${month.value}-1`).getDay()
  //   let emptyArray = Array(firstDay).fill('');
  //   const datesArray = Array(month.endDate).fill().map((_, index) => index + 1)
  //   let finalData = [...emptyArray, ...datesArray]
    
  //   calendarData.push(finalData);
  // })
}
{
  // const calendarData = [];
  // let year = 2022;
  // for (let i = 0; i < monthsInfoData.length; i++) {
  //   let firstDay = new Date(`${year}-${monthsInfoData[i].value}-1`).getDay()
  //   let emptyArray = Array(firstDay).fill('');
  //   const datesArray = Array(monthsInfoData[i].endDate).fill().map((value, index) => index + 1)
  //   let finalData = [...emptyArray, ...datesArray]
    
  //   calendarData.push(finalData);
  // }
  // console.log('calendarData = ', calendarData);
}

{
// const calendarData = [];
// let year = 2022;

// for (let i = 0; i < monthsInfoData.length; i++) {
//   let firstDay = new Date(`${year}-${monthsInfoData[i].value}-1`).getDay()
//   let emptyArray = Array(firstDay).fill('');
//   const datesArray = Array(monthsInfoData[i].endDate).fill().map((value, index) => index + 1)
//   let finalData = [...emptyArray, ...datesArray]
  
//   calendarData.push(finalData);
// }
// console.log('calendarData = ', calendarData);
}