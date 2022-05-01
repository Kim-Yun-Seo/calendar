'use strict';
//getCalendar, getCalendar parameter,
function getCalendar(currentYearAndMonth) {
  console.log('currentYearAndMonth = ', currentYearAndMonth);
  const currentYear = Number(currentYearAndMonth.slice(0,4));
  const currentMonth = Number(currentYearAndMonth.slice(5));
  const monthsInfoData = [
    { value: 1, name: 'January', endDate: 31 },
    { value: 2, name: 'month', endDate: 28 },
    { value: 3, name: 'month', endDate: 31 },
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
  const eventInfoData = {
    "1" : {},
    "2" : {
      "26": { description:'아빠 생일' }
    },
    "3" : {},
    "4" : {
      "10": { description:'윤서 생일' },
    },
    "5" : {},
    "6" : {
      "8": { description:'나정 생일' },
      "14": { description:'엄마 생일' }
    },
    "7" : {},
    "8" : {},
    "9" : {},
    "10" : {},
    "11" : {},
    "12" : {},
  };
  const days = ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'];
  console.log('eventInfoData 찾아가기    = ', eventInfoData['2']['26'].description);

  monthsInfoData[1].endDate = (currentYear % 4 === 0 && currentYear % 100 !== 0 || currentYear % 400 === 0) ? 29 : 28;
  //뭐를 이용해서 어떻게 뭐를 얼마나 결과
  //? ? 2월달날짜 2월의 길이만큼 한배열안에 2월싹다 들어가기가 하나.
  const monthDate = [];
  const monthFirstDay = new Date(`${currentYear}-${currentMonth}-1`).getDay();
  const monthLastDay = new Date(`${currentYear}-${currentMonth}-${monthsInfoData[currentMonth - 1].endDate}`).getDay();
  const frontEmptyArray = Array(monthFirstDay).fill('');
  const backEmptyArray = Array(6 - monthLastDay).fill('');
  
  for (let i = 1; i <= monthsInfoData[currentMonth - 1].endDate; i++) {
    monthDate.push(i);
  }
  let month = [...frontEmptyArray, ...monthDate, ...backEmptyArray]
  console.log('month = ', month);
  
  let dom = document.getElementById('calendar');
  let monthElement = `<div>`;
  monthElement += `<h1>${currentMonth}월</h2>`;
  //2월에 리스트로 아빠 생일 넣기.
  //찾아가기 eventInfoData["2"]["26"].description
  monthElement += `<ul>`;
  //
  monthElement += `<li>${eventInfoData[currentMonth]}</li>`;
  monthElement += `</ul>`;
  monthElement += `<table>`;
  monthElement += `<tr>`;
  days.forEach((day) => {
    monthElement += `<th class="${day}">${day}</th>`;
  });
  monthElement += `</tr>`;
  for (let i = 0; i < month.length / days.length; i++) {
    monthElement += `<tr>`;
    days.forEach((day, dayIndex) => {
      if (currentMonth === 4 && month[dayIndex + (i * days.length)] === 10) {
        monthElement += `<td class="${day}">${month[dayIndex + (i * days.length)]} 윤서생일 </td>`;
      } else if (currentMonth === 6 && month[dayIndex + (i * days.length)] === 14) {
        monthElement += `<td class="${day}">${month[dayIndex + (i * days.length)]} 엄마생일 </td>`;
      } else if (currentMonth === 2 && month[dayIndex + (i * days.length)] === 26) {
        monthElement += `<td class="${day}">${month[dayIndex + (i * days.length)]} 아빠생일 </td>`;
      } else {
        monthElement += `<td class="${day}">${month[dayIndex + (i * days.length)]}</td>`;
      }
      
    });
    monthElement += `</tr>`;
  }
  
  
  monthElement += `</table>`;
  monthElement += `</div>`;
  
  dom.innerHTML = monthElement;
}