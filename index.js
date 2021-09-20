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
            //nextPalindromeNumber(oldNumber, reversedNumber);
            remDays.innerText = "Sorry! your birthday is NOT a Palindrome."
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

// function nextPalindromeNumber(a, b) {
//     let i,j,k;
//     var original;
//     const date=Number(a[0]+a[1]); const month=Number(a[2]+a[3]); const year=Number(a[4]+a[5]);

//     if((a[0]===0)||(a[2]===0))
//     original = 0,date + 0,month + year;
//     else
//     original = date + month + year;
//     console.log(date+" "+month+" "+year);

//     let d =date;
//     for(i=year;i<=99;i++)
//     {
//         for(j=month;j<=12;j++)
//         {
//             for(k=d;k<=31;k++)
//             {
//                 //console.log(d+" ");
//                 if((k<=9) ||(j<=9))
//                 {k.toString = (0+k).toString;  j.toString = (0+j).toString;}
//                 original.toString = k.toString + j.toString + i.toString;
//                 reverse = reverseNum(original);
//                 //console.log(original+ " "+reverse);
//                 if(Number(original)===Number(reverse))
//                 remDays.innerText = reverse + "is next Palindrome of "+date;
//                 else
//                 remDays.innerText = "couldn't find";
//             }
//             k=1;
//         }
//         j=1;
//     }

// }  

btndate.addEventListener("click", checkDate);