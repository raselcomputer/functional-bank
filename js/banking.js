const depositBtn = document.getElementById('deposit-button');
const withdrawBtn = document.getElementById('withdraw-button');

// only for deposit 
depositBtn.addEventListener('click', function() {
    changeBalance('deposit')
})

// only for withdraw 
withdrawBtn.addEventListener('click', function() {
    changeBalance('withdraw')
})

// declare function 
function changeBalance(type) {
    const newMoney = document.getElementById(`${type}-input`)
    const newMoneyText = newMoney.value 
    const newMoneyNumber = parseFloat(newMoneyText)
    newMoney.value = ''
    
    const previousTotal = document.getElementById(`${type}-total`)
    const previousTotalText = previousTotal.innerText
    const previousTotalNumber = parseFloat(previousTotalText);

    previousTotal.innerText = previousTotalNumber + newMoneyNumber

    // set balance 
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const balanceTotalNumber = parseFloat(balanceTotalText)

    if(type == 'withdraw'){
        balanceTotal.innerText = balanceTotalNumber - newMoneyNumber
    }
    else{
        balanceTotal.innerText = balanceTotalNumber + newMoneyNumber
    }
}