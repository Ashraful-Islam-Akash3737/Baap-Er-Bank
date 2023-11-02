document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFeild = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawFeild.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    

    withdrawFeild.value = '';


    
    if(isNaN(withdrawAmount)){
        alert("provide me a valid number");
        return;
    }


    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const withdrawTotalAmountString = withdrawTotalAmount.innerText;
    const totalAmount = parseFloat(withdrawTotalAmountString);



    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotalString);


    if(withdrawAmount > newBalanceTotal){
        alert("Baap ar bank a ato taka nai");
        return;
    }
    

    const newTotalAmount = totalAmount + withdrawAmount;
    withdrawTotalAmount.innerText = newTotalAmount;


    const currentBalanceTotal = newBalanceTotal  - withdrawAmount;
    previousBalanceTotal.innerText = currentBalanceTotal;

})