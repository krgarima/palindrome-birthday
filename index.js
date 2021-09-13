const inpDate = document.querySelector('#inpDate');
const btndate = document.querySelector('#btn');
const remDays = document.querySelector('#message');

function checkDate()
{
    const newDate = (inpDate.value).replaceAll("-","");
    const splitNumber = newDate.split('');
    const reversedNumber = reverseNum(splitNumber);

    //console.log(newDate);
    // const joinNumber = reversedNumber.join('');
    // console.log(joinNumber);
}

function reverseNum(num)
{
    if(num[6]===num[3])
    {
        if(num[7]===num[2])
        {
            if(num[4]===num[1])
            {
                if(num[5]===num[0])
                console.log("yes");
                else
                console.log("no");
            }
        }
    }


    // let i,j=7;
    // var rev="";
    // //let number = Number(num);
    // //console.log(num);
    // for(i=0;i<4;i++)
    // {
    //     if(num[i]===num[j])
    //     {console.log(num[i] +"="+ num[j]);}
    //     else
    //     {i=5;console.log("no");}
    //     j--;
    // }
   
}   
//     // console.log(num);

//     // let l=num.length;
//     // let i,j;
//     // j=l-1;
//     // //let number = Number(num);
//     // for(i=0;i<l;i++)
//     // {
//     //         // if( num.charAt(i) === num.charAt(j) )          
//     //         //     {j--;console.log(num)}
//     //         //     else
//     //         //     console.log("Nooo");
//     //         console.log("At "+ i+" = "+num.charAt(i));

//     }


// }

btndate.addEventListener("click", checkDate);