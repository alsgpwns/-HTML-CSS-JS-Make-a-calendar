let tableArray = new Array(100);

let today = new Date();
let dd = today.getDate(); //오늘 날짜(20일)
let mm = today.getMonth(); //이번 달
let yyyy = today.getFullYear(); //이번 년도
let hours = today.getHours(); 
let minutes = today.getMinutes();  

// var firstDayOfTheWeekInst = new Date(curYear, curMonth, 1);     
// var firstDayOfTheWeek = firstDayOfTheWeekInst.getDay();   



// 시작하는 요일 구하기
let firstdayInst = new Date(yyyy, mm, 1); //2020년 8월 1일로 생성
let getfirstday = firstdayInst.getDay(); //2020/08/01의 요일

let lastday = 0;
getLastDayOfMonth(mm);

// 마지막날짜 구하기
function getLastDayOfMonth(mm) {

    switch (mm){

        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            lastday=31;
            break;

        case 2:
            윤년구하기();
            //아직 안만들었음

        case 4:
        case 6:
        case 9:
        case 11:
            lastday=30;
            break;
    }
}



let num = 0;
makeArrayTable();

//배열에 넣기 (0~41 : 총 42개)
function makeArrayTable() {

    for(i = 7; i<getfirstday+7; i++)
    {
        tableArray[i] = " ";
    }

    for(i = getfirstday+7; i<lastday+getfirstday+7; i++)
    {
        num++;
        tableArray[i] = num;
    }

    for(i = lastday+getfirstday+7; i<49; i++)
    {
        tableArray[i] = " ";
    }
}

//배열에 요일 넣기
let tableDateArr = new Array("일","월","화","수","목","금","토");

let korTime = 0;
getTime();

//현재 한국 시간
function getTime() {

    if( 0<=hours && 12>=hours)
    {
        korTime = "오전"+ hours+":"+minutes;
    }
    else if( 12<=hours && 24>=hours)
    {
        hours = hours-12;
        korTime = "오후 "+ hours+":"+minutes;
    }
}


/////////////////////////////////////////
//요일 출력하기 
//count 총 갯수: 37
let count=0;
let text=`<table> <th colspan=7>${yyyy}년 ${mm+1}월</th>`;
for(let i = 0; i<1; i++)
{
    text = text + '<tr>';
    for(let j = 0; j<7; j++)
    {
      
        count++;
        text = text + '<td>'+ tableDateArr[j] + '</td>';

    }
    text = text + '</tr>';

}

//출력
for(let i = 1; i<7; i++)
{
    text = text + '<tr>';

    for(let j = 0; j<7; j++)
    {
        if( tableArray[dd]==count-24)
        {
            text = text + `<td> ${tableArray[count]}<br> ${korTime} </td>`;
            count++;
            continue;
        }

        text = text + '<td>'+ tableArray[count] + '</td>';
        count++;
    }
    
    text = text + '</tr>';
}


text = text + '</table>';

document.getElementById('cal').innerHTML=text;



