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
                <td>${tableDayoftheweekArr[i]}</td>`;
    }
}

//날짜 넣기
showDate();
function showDate(){
    let tableDateArr = new Array();
    let datecount=1;
    for(let i=getfirstday+1; i<getfirstday+lastday+1; i++)
    {
        tableDateArr[i]=datecount;
        datecount++;
    }

    let count=1;
    //날짜
    for(let i=0; i<lastday/7+1; i++)
    {
        text = text+"<tr>";
        for(let j=1; j<8;j++)
        {
            if(tableDateArr[count]===undefined)
            {
                tableDateArr[count]=" ";
            }
            text = text+`<td>${tableDateArr[count]}</td>`;
            count++;

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
// "<li class='prev'><a href='#' onclick='left()'><</a></li>";
// "<li class='next'><a href='#' onclick='nextMonth(1)'>></a></li>";

function onLeftClickTest() {
    firstdayInst = new Date(yyyy, mm-1, 1); 
    getfirstday = firstdayInst.getDay(); 
    lastdayInst = new Date(yyyy,mm-1,0);
    lastday = lastdayInst.getDate();
    showMonth(mm-1);
    showDay();
    showDate();
}

function onRightClickTest() {

    firstdayInst = new Date(yyyy, mm+1, 1); 
    getfirstday = firstdayInst.getDay(); 
    lastdayInst = new Date(yyyy,mm+1,0);
    lastday = lastdayInst.getDate();
    showMonth(mm+1);
    showDay();
    showDate();
    
}

function left() {
    firstdayInst = new Date(yyyy, mm-1, 1); 
    getfirstday = firstdayInst.getDay(); 
    lastdayInst = new Date(yyyy,mm-1,0);
    lastday = lastdayInst.getDate();
    showMonth(mm-1);
    showDay();
    showDate();
}

// firstdayInst = new Date(yyyy, mm+1, 1); 
// getfirstday = firstdayInst.getDay(); 
// lastdayInst = new Date(yyyy,mm+1,0);
// lastday = lastdayInst.getDate();
// showMonth(mm+1);
// showDay();
// showDate();



document.getElementById('CalendarBody').innerHTML=text;


