const inpDate = document.querySelector('#inpDate');
const btndate = document.querySelector('#btn');
const remDays = document.querySelector('#message');

function checkDate() {
    const oldDate = (inpDate.value).replaceAll("-", "");
    const splitNumber = oldDate.split('');

    const oldNumber = originalNumber(splitNumber);
    const reversedNumber = reverseNum(splitNumber);
    if (oldNumber === reversedNumber) {
        remDays.innerText = "Birthday is a Palindrome."
    } else {
        difference(oldNumber, reversedNumber);
        remDays.innerText = "Birthday is a NOT Palindrome."
    }
}

function originalNumber(num) {
    let i = num[6] + num[7] + num[4] + num[5] + num[0] + num[1] + num[2] + num[3];
    return i;
}

function reverseNum(num) {
    let j = num[3] + num[2] + num[1] + num[0] + num[5] + num[4] + num[7] + num[6];
    return j;
}

function difference(a, b) {
    let i=0;
    const date=a[0]+a[1]; const month=a[2]+a[3]; const year=a[4]+a[5]+a[6]+a[7];
    for(i=year;i<=9999;i++)
    {
        if(d<=31)
        const diff = 
    }
}

// if(num[6]===num[3])
// {
//     if(num[7]===num[2])
//     {
//         if(num[4]===num[1])
//         {
//             if(num[5]===num[0])
//             console.log("Yes! Entered birthday is a palindrome number");
//             else
//             findDifference(num);
//         }
//         else
//         findDifference(num);
//     }
//     else
//     findDifference(num);
// }
// else
// findDifference(num);

//  function findDifference(num)
//  {
//     let year=num[0]+num[1]+num[2]+num[3];
//     let month=num[4]+num[5];
//     let date=num[6]+num[7];
//     let i,result=0;
//     for(i=year ; i<9999;i++)
//     {
//         if((date<=31)&&(month<12))
//         result
//     }
//  }   

btndate.addEventListener("click", checkDate);