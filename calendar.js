

const monthArray = [];
// 바꾸고 싶은 리스트 
// ---- for문 너무 많이돌고 5
// 비교문 너무 많고
// ---- 상수 너무 많고 5
// 변수 너무 많음 

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


for (let month = 0; month < monthsData.length; month++ ) {
  let dateArray = [];

  for(let day = 0; day < monthsData[month].hasDate; day++) {
    dateArray.push(day+1);
    // if (month === 1) { //2월
    //   if (day < monthsData.hasDate) {
    //     dateArray.push(day);
    //   } // 28 까지만 푸시 
    // } else if ( //4월 6월 9월 11월
    //   month === 3 ||
    //   month === 5 ||
    //   month === 8 ||
    //   month === 10 ) { 
    //   // 30 까지만 푸시
    //   if (day < 31) {
    //     dateArray.push(day);
    //   }
    // } else { // 나머지
    //   dateArray.push(day);
    //   //31까지만 푸시
    // }
  }

  // if (i === 1) {
  //   for(let i = 1; i < 29; i++) {
  //     dateArray.push(i);
  //   }
  // } else if ( 
  //   i === 3 ||
  //   i === 5 ||
  //   i === 8 ||
  //   i === 10 ) {
  //   for(let i = 1; i < 31; i++) {
  //     dateArray.push(i);
  //   }
  // } else {
  //   for(let i = 1; i < 32; i++) {
  //     dateArray.push(i);
  //   }
  // }
  monthArray.push(dateArray);
}
console.log('monthArray = ', monthArray);
