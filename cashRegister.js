function checkCashRegister(price, cash, cid) {
  let cashRegister = {
    status: '',
    change: cid
  };
  const changeNeeded = parseFloat(cash - price).toFixed(2);
  const changeAvilable = totalCashInRegister(cid);

  cashRegister.status = cashRegisterStatus(changeNeeded, changeAvilable);

  if (cashRegister.status === 'INSUFFICIENT_FUNDS') {
    cashRegister.change = [];

    return cashRegister;
  }

  cashRegister.change = customerChange(changeNeeded, cid);

  if (changeNeeded > totalCashInRegister(cashRegister.change)) {
    cashRegister.change = [];
    cashRegister.status = 'INSUFFICIENT_FUNDS';

    return cashRegister;
  }

  if (cashRegister.status === 'CLOSED') {
    cashRegister.change = [...cid];
  }

  return cashRegister;
}

function customerChange(changeNeeded, cashInDrawer) {
  const change = [];
  const currencyDictonary = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100
  };

  for (let i = cashInDrawer.length - 1; i >= 0; i--) {
    const coinName = cashInDrawer[i][0];
    const coinTotal = cashInDrawer[i][1];
    const coinValue = currencyDictonary[coinName];
    let coinAmount = (coinTotal / coinValue).toFixed(2);
    let coinsToReturn = 0;

    while (changeNeeded >= coinValue && coinAmount > 0) {
      changeNeeded -= coinValue;
      changeNeeded = changeNeeded.toFixed(2);
      coinAmount--;
      coinsToReturn++;
    }

    if (coinsToReturn > 0) {
      change.push([coinName, coinsToReturn * coinValue]);
    }
  }

  return change;
}

function totalCashInRegister(cashInDrawer) {
  let total = 0;

  for (let cash of cashInDrawer) {
    let cashValue = cash[1];

    total += cashValue;
  }

  return total.toFixed(2);
}

function cashRegisterStatus(changeNeeded, changeAvilable) {
  if (Number(changeAvilable) < Number(changeNeeded)) {
    return 'INSUFFICIENT_FUNDS';
  }

  if (Number(changeAvilable) > Number(changeNeeded)) {
    return 'OPEN';
  }

  return 'CLOSED';
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ])
);
