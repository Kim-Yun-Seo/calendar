
//1~12월까지 정보만들거임
const monthsData = [
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
]

const calendarData = [];

for (let i = 0; i < monthsData.length; i++) {
  //12개월 만들거야
  //12개의 배열 만들어서 calenderData안에 넣을거야
  const monthArray = []
  calendarData.push(monthArray);
  
  // monthsData안에 루프 돌면서 인덱스 안에 endDate찾아서 monthArray안에 endDate 만큼숫자 넣기
  for (let date = 1; date <= monthsData[i].endDate; date++) {
    monthArray.push(date);

  }
}

//공백을 넣아야함
//요일 찾아 

//현재 날짜 찾아서 요일 찾음
// new Date로 현재 날짜 받아서 그 getDay로 요일 찾기

let date = new Date();
let day = date.getDay()

//4월만 calendarData 넣어봐
//0을 이미 있는 calendarData에 있는 5번 인덱스배열 안에 앞으로 넣어야함.

for (let k = 0; k < 5; k++) {
  calendarData[5].unshift(0)
}

console.log('calendarData =',calendarData);

// calendarData 안에 있는 모든 배열에 0넣을거야
