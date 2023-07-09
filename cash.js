const denominations = [
  ["PENNY", 1],

  ["NICKEL", 5],

  ["DIME", 10],

  ["QUARTER", 25],

  ["ONE", 100],

  ["FIVE", 500],

  ["TEN", 1000],

  ["TWENTY", 2000],

  ["ONE HUNDRED", 10000],
];

const currencies = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ];

function checkCashRegister(price, cash, cid) {
  let change = Math.round(cash * 100 - price * 100);
  let cashInHand = {};
  let cashToGive = {};

  cid.forEach((denominations) => {
    cashInHand[denominations[0]] = Math.round(denominations[1] * 100);
  });

  let index = denominations.length - 1;

  while (index >= 0 && change > 0) {
    let moneyName = denominations[index][0];
    let moneyValue = denominations[index][1];
    if ((change - moneyValue > 0 && cashInHand[moneyName], change)) {
      cashToGive[moneyName] = 0;
      while (cashInHand[moneyName] > 0 && change - moneyValue >= 0) {
        cashInHand[moneyName] -= moneyValue;
        cashToGive[moneyName] += moneyValue;
        change -= moneyValue;
      }
    }
    index -= 1;
  }

  if (change === 0) {
    let emptyRegister = true;

    Object.keys(cashInHand).forEach((moneyType) => {
      if (cashInHand[moneyType] > 0) {
        emptyRegister = false;
      }
    });

    if (emptyRegister) {
      return {
        status: "CLOSED",
        change: cid,
      };
    } else {
      let changeArray = [];
      Object.keys(cashToGive).map((moneyType) => {
        if (cashToGive[moneyType] > 0) {
          changeArray.push([moneyType, cashToGive[moneyType] / 100]);
        }
      });
      return { status: "OPEN", change: changeArray };
    }
  }
  return { status: "INSUFFICIENT_FUNDS", change: [] };
}

let res = checkCashRegister(19.5, 20, currencies);
console.log(res);
