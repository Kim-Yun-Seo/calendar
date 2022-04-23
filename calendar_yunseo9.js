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
const days = [
  'sun',
  'mon',
  'tue',
  'wed',
  'thr',
  'fri',
  'sat'
]
const year = 2020;
monthsInfoData[1].endDate = (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
const calendarData = monthsInfoData.map((month) => {
  const datesArray = Array(month.endDate).fill().map((_, index) => index + 1);
  const firstDay = new Date(`${year}-${month.value}-1`).getDay();
  const lastDay = new Date(`${year}-${month.value}-${month.endDate}`).getDay();
  const frontEmptyArray = Array(firstDay).fill('');
  const backEmptyArray = Array(6 - lastDay).fill('');

  return [...frontEmptyArray, ...datesArray, ...backEmptyArray];
})
let dom = document.getElementById('February');
let header = `<tr>`
//요일들이 2월 달력이 끝때까지 반복?
// 끝날 어떻게 찾을까
// 반복 어떻게 하지?
// 끝날찾기 = length찾기..?
// 요일들을 묶어서 돌릴까
//length를 7로 나눠서 
// 데이를 7번 순회한 th를 다시 5번 돌린다.
// 5번 돌리면 은 어떻게 하지?---
for (let i = 0; i < 5; i++) {
  days.forEach((day) => {
    header += `<th>${day}</th>` 
  })
}
header += `</tr>`
let datas = `<tr>`
calendarData[1].forEach(date => {
  datas += `<td>${date}</td>` 
});
datas += `</tr>`

dom.innerHTML = header + datas;




console.log('dom = ', dom);