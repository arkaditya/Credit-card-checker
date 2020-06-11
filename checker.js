let button = document.getElementById(validate);
button.onclick = creditCardChecker;

function validateCred(arr)
{
    let sum = arr[arr.length-1];
    let curr = 0;
    for(let num=arr.length - 2; num >= 0 ; num-=2)
    {
        curr = 2*arr[num];
        if(curr > 9)
        {
            curr = curr - 9;
        }
        sum += curr;
        if(num > 0)
            sum += arr[num-1];
    }
    return (sum%10==0) ? true : false;
}

function creditCardChecker()
{
    let cardCompanies = ['AMEX','VISA','Mastercard','Discover'];
    let input = document.getElementById(ccard).value;
    if(validateCred(input))
    {
        alert("Valid Card");
    }
    else{
        alert("Invalid Card");
    }
}