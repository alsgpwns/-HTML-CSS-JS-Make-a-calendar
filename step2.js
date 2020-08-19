let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

// 날짜 출력하기
// document.write(today);
// document.write('<br>');
// document.write(dd);
// document.write('<br>');
// document.write(mm);
// document.write('<br>');
// document.write(yyyy);

document.write('<br>');
let lastday = 0;
getLastDayOfMonth(mm);

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


makeTable();


function makeTable() {
    let text ='<table border=1>';
    let num = 0;
    let total = 0;

    
        for(i=0; i<5; i++){
            text = text + '<tr>';

            for(j=0; j<7; j++){
                num++;
                text = text + '<td>'+ num+'</td>';

                if(num==lastday)
                {
                    for(k=lastday; k<35; k++)
                    {
                        text = text + '<td>'+" "+'</td>';
                    }
                    break;
                }

            }
            text = text + '</tr>';
        }
      
    text = text + '</table>';
    document.getElementById('cal').innerHTML=text;

}






