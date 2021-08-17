
// only for deposit 
document.getElementById('deposit-button').addEventListener('click', function(){
    changeBalance("deposit")
});

// only for withdraw 
document.getElementById('withdraw-button').addEventListener('click', function(){
    changeBalance("withdraw")
});


// function 

function changeBalance(type) {
    console.log(type)
    const newMoney = document.getElementById(`${type}-input`);
    const newMoneyText = newMoney.value;
    const newMoneyNumber = parseFloat(newMoneyText);
    newMoney.value = '';

    const previousTotal = document.getElementById(`${type}-total`);
    const previousTotalText = previousTotal.innerText;
    const previousTotalNumber = parseFloat(previousTotalText);
    
    previousTotal.innerText = previousTotalNumber + newMoneyNumber;

    // set balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceText);

    // show balance 
    if(type == "withdraw"){
        balanceTotal.innerText = newBalanceTotal - newMoneyNumber;
    }
    else{
        balanceTotal.innerText = newBalanceTotal + newMoneyNumber;
    }
}




