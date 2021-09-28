var inputDate = document.querySelector('#inputDate');
var clickButton = document.querySelector('#check-btn');
var nextResult = document.querySelector('#nextDate');
var prevResult = document.querySelector('#prevDate');

function clickHandler(e)
{
  var birthString = inputDate.value;
  
  if(birthString !== '')
  var listOfDate =  birthString.split('-');

  var date = {
    day: Number(listOfDate[2]),
    month: Number(listOfDate[1]),
    year: Number(listOfDate[0])
  };

  var isPalindrome = checkpalindromeAllformsData(date);

  if(isPalindrome)
  nextResult.innerText = "Hurray! Your birthday is a Palindrome 🥳🥳🥳🥳🥳";
  else
  {
    var [counter, nxtDate] = getNextPalindromeDate(date);
    nextResult.innerText = `The next Palindrome date is ${nxtDate.day}-${nxtDate.month}-${nxtDate.year} You missed it by ${counter} days! 😔`;
    var [counterP, prevDate] = getPreviousPalindromeDate(date);
    prevResult.innerText = `The previous Palindrome date was ${prevDate.day}-${prevDate.month}-${prevDate.year} You missed it by ${counterP} days! 😔`;
  }
  // console.log(getPreviousDate(date));
}


function isReverse(str)
{
  return str.split('').reverse().join('');
}

function isPalindrome(str)
{
  palindromeDate = isReverse(str);
  return str === palindromeDate
}

function convertDatetoString(Date)
{
  var dateString =
  {
    day: '',
    month: '',
    year: ''
  };
  
  if(Date.day<10)
  dateString.day = '0'+Date.day;
  else
  dateString.day = Date.day.toString();
  if(Date.month<10)
  dateString.month = '0'+Date.month;
  else
  dateString.month = Date.month.toString();
  dateString.year = Date.year.toString();

  return dateString;
}

function getAllDateFormats(date)
{
var dateStr = convertDatetoString(date);
  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmyyyydd = dateStr.month + dateStr.year + dateStr.day;
  var yyyyddmm = dateStr.year + dateStr.day + dateStr.month;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmyydd = dateStr.month + dateStr.year.slice(-2) + dateStr.day;
  var yyddmm = dateStr.year.slice(-2) + dateStr.day + dateStr.month;
  return [ddmmyyyy, mmyyyydd, yyyyddmm, ddmmyy, mmyydd, yyddmm];
}

function checkpalindromeAllformsData(date)
{
var allDateFormats = getAllDateFormats(date);
var flag = false;
for(var i=0; i<allDateFormats.length; i++)
{
if(isPalindrome(allDateFormats[i]))
{flag = true;
break;}
}
return flag;
}

function isLeapYear(year)
{
  if(year % 400 === 0)
  return true;
  if(year % 100 === 0)
  return false;
  if(year % 4 === 0)
  return true;
  else
  return false;
}

function getNextDate(date)
{
  var day = date.day+1;
  var month = date.month;
  var year = date.year;

  var daysinMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if( month === 2)
  {
    if(isLeapYear(year))
    {  if(day > 29)
      {
        day =1;
        month++;
      }
    }
    else
    if(day > 28)
      {
        day =1;
        month++;
      }
  }
  else
  {
    if(day > daysinMonth[month-1])
    {
      day =1;
      month++;
    }
  }

  if(month > 12)
  {
    month=1;
    year++;
  }

return{
  day: day,
  month: month,
  year: year
};
}

function getPreviousDate(date)
{
  var day = date.day-1;
  var month = date.month;
  var year = date.year;

  var daysinMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if( month === 3)
  {
    if(isLeapYear(year))
    {  if(day < 1)
      {
        day =29;
        month--;
      }
    }
    else
    if(day < 1)
      {
        day =28;
        month--;
      }
  }
  else
  {
    if(day < 1)
    {
      day =daysinMonth[month-2];
      month--;
    }
  }

  if(month < 1)
  {
    month=12;
    year--;
    day=31;
  }

return{
  day: day,
  month: month,
  year: year
};
}

function getNextPalindromeDate(date)
{
  var counter =0;
  var nextDate = getNextDate(date);

  while(1)
  {
    counter++;
    var isPalindrome = checkpalindromeAllformsData(nextDate);
    if(isPalindrome)
    {break;}
    else
    nextDate = getNextDate(nextDate);
  }
  return [counter, nextDate];
}

function getPreviousPalindromeDate(date)
{
  var counterP =0;
  var previousDate = getPreviousDate(date);

  while(1)
  {
    counterP++;
    var isPalindrome = checkpalindromeAllformsData(previousDate);
    if(isPalindrome)
    {break;}
    else
    previousDate = getPreviousDate(previousDate);
  }
  return [counterP, previousDate];
}

clickButton.addEventListener('click', clickHandler);

