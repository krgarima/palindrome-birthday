const inpDate = document.querySelector('#inpDate');
const btndate = document.querySelector('#btn');
const remDays = document.querySelector('#message');

function checkDate() {

    if ((inpDate.value)) {
        const oldDate = (inpDate.value).replaceAll("-", "");
        const splitNumber = oldDate.split('');

        const oldNumber = originalNumber(splitNumber);
        const reversedNumber = reverseNum(splitNumber);

        if (Number(oldNumber) === Number(reversedNumber)) {
            remDays.innerText = "Your birthday is a Palindrome."
        } else {
            remDays.innerText = "Sorry! your birthday is NOT a Palindrome."
            // var num = nextPalindromeNumber(oldNumber);
            // remDays.innerText = num;
        }
    } else
        remDays.innerText = "Error: empty field!";
}

function originalNumber(num) {
    const i = num[6] + num[7] + num[4] + num[5] + num[2] + num[3];
    return i;
}

function reverseNum(num) {
    const j = num[3] + num[2] + num[5] + num[4] + num[7] + num[6];
    return j;
}

function checkPalindrome(a, b) {
    if (originalNumber(a) === reverseNum(b))
        return
    remDays.innerText = a + " is Palindrome of " + b;
}


// function nextPalindromeNumber(a) {
//     // let i,j,k;
//     var original=" ";

//     var date=a[0]+a[1]; var month=a[2]+a[3]; var year=a[4]+a[5];
//     if((Number(a[0])===0)||(Number(a[2])===0))
//     original = "0"+date + "0"+month + year;
//     else
//     original = date + month + year;
//     // console.log(date+" "+month+" "+year);

//     let d =date;
//     // for(var i=year;i<=99;i++)
//     // {
//         for(var j=month;j<=12;j++)
//         {
//             for(var k=d;k<=31;k++)
//             {
//                 if(Number(k)<=9)
//                 original= "0"+k + month + year;
//                 else if(Number(j)<=9)
//                 original= k + "0"+month + year;
//                 console.log(k+" "+j+" "+year);
//                 original = k.toString + j.toString + year;
//                 reverse = reverseNum(original);
//                 console.log(original+ " "+reverse);
//                 if(Number(original)===Number(reverse))
//                 {return Number(original);}
//                 else
//                 remDays.innerText = "couldn't find";
//                 if(Number(k)===31)
//                 d=1;
//             }
//             if(Number(j)===12)
//             month=1;
//         }
//         // j=1;
//     // }
// }  


btndate.addEventListener("click", checkDate);