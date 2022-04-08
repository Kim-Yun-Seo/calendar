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

//빈 array 있어야 하고
//날짜 넣어야 하고
//for 날짜 계산


// 0012345 .. 31
// 없는거 + 갖고있는 거 

let year = 2022;
const calendarData = [];

for (let i = 0; i < monthsData.length; i++) {
  const monthArray = [];
  // 2022 3월 1일이 무슨 요일인지
  
  let month = i+1
  let firstDateObject = new Date(`${year}-${month}-1`);
  let day = firstDateObject.getDay()

  calendarData.push(monthArray);
  for (let j = 1; j <= monthsData[i].hasDate; j++) {
    monthArray.push(j)
  }
  // console.log('00 + [1, 2, 34] = [0,0,1,2,3,4 ~] = >');
  
  for (let k = 0; k < day; k++) {
    calendarData[i].unshift(0)
  }
}

console.log('calendarData = ', calendarData);


// const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// monthsData.forEach((month) => {
//   //일단 윤년 생략.
//   //요일 계산 하는거 만들어야함.
//   const monthdate = [];
//   const firstDate = `${currentYear}, ${month.value}, 1`;
// })


//yeardate = monthArray
//윤년계산기
//요일별로 0추가
//display 만들기
//currentMonth = 현재 달
//calendarData = monthArray + 0 포함
//-> 0이 들어가 있는 프로그램 짜야함



// const displayCalendar = (year, month) => {
//   const currentMonth = calendarData(year)[month - 1];
//   let table = ``;
//   table += `<table>`;
//   table += `  <tr>`;
//   for (let i = 0; i < 5; i++) {
//     days.forEach((day) => {
//       if (day === 'Sun') {
//         table += `  <th class="sunday">${day}</th>`;
//       } else {
//         table += `  <th>${day}</th>`;
//       }
//     }); 
//   }
//   table += `  </tr>`
//   table += `  <tr>`;
//   currentMonth.forEach((date) => {
//     table += `  <td>${date}</td>`;
//   });
//   table += `  </tr>`;
//   table += `</table>`;
  
//   document.getElementById('year').innerHTML = year;
//   document.getElementById('month').innerHTML = month;
//   document.querySelector('.wrap').innerHTML = table;
// }