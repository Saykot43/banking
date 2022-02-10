// deposit part
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmountText= depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositInput);
    const depositTotal= document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText= newDepositTotal;
    
    // Update balance
    const balanceTotal= document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal= newDepositAmount + previousBalanceTotal;
    balanceTotal.innerText = newBalanceTotal;

    // clear deposit input
    depositInput.value='';
});


// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput= document.getElementById('withdraw-amount');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    // set withdraw total
    const withdrawTotal= document.getElementById('withdraw-total');
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
    const newWithdrawtTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText= newWithdrawtTotal;

    // Update balance
    const balanceTotal= document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal= previousBalanceTotal-newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear withdraw input
    withdrawInput.value='';
});