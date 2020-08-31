let text="";
let today = new Date();
let yyyy = today.getFullYear(); //이번 년도
let mm = today.getMonth(); //이번 달
let dd = today.getDate(); //오늘 날짜(20일)
let hours = today.getHours(); 
let minutes = today.getMinutes();  

// 시작하는 요일 구하기
let firstdayInst = new Date(yyyy, mm, 1); //2020년 8월 1일로 생성
let getfirstday = firstdayInst.getDay(); //2020/08/01의 요일

//마지막 날짜 구하기
let lastdayInst = new Date(yyyy,mm,0);
let lastday = lastdayInst.getDate();

//배열에 요일 넣기
let tableDayoftheweekArr = new Array("SUN","MON","TUE","WED","THU","FRI","SAT");
let tableMonthArr = new Array("January","February","March","April","May","June","July","August","September","October","November","Decmber");

//달
showMonth(mm);
function showMonth(mm) {
    text="<table><th colspan='7' id='thMonth'>";
    for(let i=0; i<tableMonthArr.length;i++)
    {
        if(mm==i)
        {
            text = text+`${yyyy} ${tableMonthArr[i]}</th>`;
            break;
        }
    }
}

//요일
showDay();
function showDay(){
    text= text+"<tr>";
    for(let i=0; i<tableDayoftheweekArr.length; i++){
        text = text+`
                <td class=day${i}>${tableDayoftheweekArr[i]}</td>`;
    }
}

//한국 시간
let korTime = 0;
if( 0<=hours && 12>=hours)
{
        korTime = + hours+":"+minutes+" A.M";
}
else if( 12<=hours && 24>=hours)
{
    hours = hours-12;
    korTime =  hours+":"+minutes+" P.M";
}

//날짜 넣기
showDate();
function showDate(){
    //칸 갯수
    let arrayCalculation = 0;
    if(getfirstday>=6)
    {
        arrayCalculation=6;
    }
    else
    {
        arrayCalculation=5;
    }
  

    let tableDateArr = new Array();
    let datecount=1;
    for(let i=getfirstday+1; i<getfirstday+lastday+1; i++)
    {
        tableDateArr[i]=datecount;
        datecount++;
    }

    let count=1;
    //날짜
    for(let i=0; i<arrayCalculation; i++)
    {
        text = text+"<tr>";
        for(let j=1; j<8;j++)
        {
            if(tableDateArr[count]===undefined)
            {
                tableDateArr[count]=" ";      
            }
            if(yyyy == today.getFullYear() && mm == today.getMonth() && tableDateArr[count]==dd)
            {
                text = text+`<td id="today">${tableDateArr[count]}<br/>${korTime}</td>`;
                count++;
            }
            else{
                text = text+`<td class=date${j}>${tableDateArr[count]}</td>`;
                count++;
            }

        }
        text= text+"</tr>";
    }
    text =text+ `</tr></table>`;
    
}


//버튼
text = text+
 `
<button id="PreMonth" type="button" value="click" onclick="onRightClickTest();">></button>
<button id="LastMonth" type="button" value="click" onclick="onLeftClickTest();"><</button>`;

function onLeftClickTest() {
    if (mm != 0) mm--;
    else if (mm == 0) 
    {
        mm=11;
        yyyy--;
    }

    firstdayInst = new Date(yyyy, mm, 1); 
    getfirstday = firstdayInst.getDay(); 
    lastdayInst = new Date(yyyy,mm,0);
    lastday = lastdayInst.getDate();
    showMonth(mm);
    showDay();
    showDate();
    
    document.getElementById('CalendarBody').innerHTML=text+
     `
    <button id="PreMonth" type="button" value="click" onclick="onRightClickTest();">></button>
    <button id="LastMonth" type="button" value="click" onclick="onLeftClickTest();"><</button>`;
 
}

function onRightClickTest() {
    if (mm != 11) mm++; // increment mm if NOT 11 (December)
    else if (mm == 11) 
    {
        mm=0;
        yyyy++;
    }
    firstdayInst = new Date(yyyy, mm, 1); 
    getfirstday = firstdayInst.getDay(); 
    lastdayInst = new Date(yyyy,mm,0);
    lastday = lastdayInst.getDate();
    showMonth(mm);
    showDay();
    showDate();
    
    document.getElementById('CalendarBody').innerHTML=text+
     `
    <button id="PreMonth" type="button" value="click" onclick="onRightClickTest();">></button>
    <button id="LastMonth" type="button" value="click" onclick="onLeftClickTest();"><</button>`;
}



document.getElementById('CalendarBody').innerHTML=text;

