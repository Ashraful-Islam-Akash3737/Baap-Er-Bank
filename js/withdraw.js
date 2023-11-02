document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFeild = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawFeild.value;
    const withdrawAmount = parseFloat(withdrawAmountString);


    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const withdrawTotalAmountString = withdrawTotalAmount.innerText;
    const totalAmount = parseFloat(withdrawTotalAmountString);


    const newTotalAmount = totalAmount + withdrawAmount;
    withdrawTotalAmount.innerText = newTotalAmount;


    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotalString);


    const currentBalanceTotal = newBalanceTotal  - withdrawAmount;
    previousBalanceTotal.innerText = currentBalanceTotal;


    withdrawFeild.value = '';
})