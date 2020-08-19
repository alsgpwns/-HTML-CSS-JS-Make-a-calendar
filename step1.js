
let text = '<table>';
let num=0;


    for(let i=1; i<=7; i++)
    {
        text = text +'<tr>';

            for(let j=1; j<=7; j++)
            {

                if(num>=31)
                {
                    text = text+'<td>'+'</td>';
                    continue;
                }
                num++;
                text = text+'<td>'+num+'</td>';
                
            }

        text = text + '</tr>';

        if(num>=31)
        {
            break;
        }
    }

text = text + '</table>';


document.getElementById('cal').innerHTML = text;