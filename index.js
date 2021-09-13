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
        nextPalindromeNumber(oldNumber, reversedNumber);
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

function checkPalindrome(a,b)
{
    if(originalNumber(a)===reverseNum(b))
    return
    remDays.innerText = a + " is Palindrome of "+ b;
}

function nextPalindromeNumber(a, b) {
    let i,j,k;
    const date=Number(a[0]+a[1]); const month=Number(a[2]+a[3]); const year=Number(a[4]+a[5]+a[6]+a[7]);
    
    const original = date + month + year;
    let d = Number(date);
    for(i=year;i<=5000;i++)
    {
        for(j=month;j<=12;j++)
        {
            for(k=d;k<=31;k++)
            {
                console.log(d+" ");
                original.toString = k.toString + j.toString + i.toString;
                reverse = reverseNum(original);
                console.log(original+ " "+reverse);
                if(original===reverse)
                remDays.innerText = reverse + "is next Palindrome of "+date;
                else
                remDays.innerText = "couldn't find";
            }
            k=1;
        }
        j=1;
    }
    
}  

btndate.addEventListener("click", checkDate);