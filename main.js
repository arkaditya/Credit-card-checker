// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

let cardCompanies = ['AMEX','VISA','Mastercard','Discover'];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = arr =>
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

// Find Invalid Cards from the input
const findInvalidCards = cards =>
{
    let invalidCards = [];
    cards.forEach(function(card) {
        if(!validateCred(card))
        {
            if(typeof(card)!="number")
            {
              let cardStringFormat = "";
              card.forEach(function(num) {
                cardStringFormat += num.toString(); 
              });
              invalidCards.push(cardStringFormat);
            }
            else //Convert to String to get index 0 values for company validation
            {
              invalidCards.push(card.toString());
            }
            
        }  
    });        
    return invalidCards;
}

// FInd invalid card companies mailing such cards
const idInvalidCardCompanies = invalidCards => {

  let companyList = [];
  invalidCards.forEach(function(card)
  {
    if(card[0]==='3')
    {
      companyList.push(cardCompanies[0]);
    } else if (card[0]==='4') { 
        companyList.push(cardCompanies[1]);
    } else if (card[0]==='5') { 
        companyList.push(cardCompanies[2]);
    } else if (card[0]==='6') { 
        companyList.push(cardCompanies[3]);
    } else {
      console.log(`Company Not found for CARD: ${card}`);
    }
  });

  return companyList;
}

const genericInputConverter = cardArray => {
  let ccards  = [];
  cardArray.forEach(function(card)
  {
    if(typeof(card)==="string")
    {
      let cardToInt = parseInt(card);
      ccards.push(cardToInt);
    }
    else
      ccards.push(card);
  });
  return ccards
}

// Main Method 
const creditCardCheckerMain = input => {

  const invalidCards = findInvalidCards(genericInputConverter(input));
  let companyList = idInvalidCardCompanies(invalidCards);
  console.log(`The Companies mailing Invalid cards are: [${companyList}]`);
}

//const testArr = [mystery1,valid1,invalid4,mystery5,"12222222222141313",invalid2,valid4,mystery3,[7,1,1,6,4,3,2,5,6,6,7,5,4],"4485149740629906282"];
//const testArr = ['4485149740629906282','372492733379555',"4917988979622628","12222222222141313"];


creditCardCheckerMain(testArr);