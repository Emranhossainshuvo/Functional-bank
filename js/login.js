document.getElementById('deposit-button').addEventListener('click', function(){
    const depostiInputFieldElement = document.getElementById('deposit-input-fiels');
    const depostiInputFieldString = depostiInputFieldElement.value;
    const depostiInputField = parseFloat(depostiInputFieldString);

    if(isNaN(depostiInputField) ){
        alert ('please give a valid number');
        depostiInputFieldElement.value = '';
        return;
    }

    const depositedAmountElement = document.getElementById('deposited-amount');
    const depositedAmountString = depositedAmountElement.innerText;
    const depositedAmount = parseFloat(depositedAmountString);
    depositedAmountElement.innerText = depositedAmount + depostiInputField;
    

    const totalAmountElement = document.getElementById('total-amount');
    const totalAmountString = totalAmountElement.innerText;
    const totalAmount = parseFloat(totalAmountString)
    totalAmountElement.innerText = totalAmount + depostiInputField;
    
    depostiInputFieldElement.value = '';

});


document.getElementById('button-withdraw').addEventListener('click', function(){
    const depostiInputFieldElement = document.getElementById('withdraw-input-field');
    const depostiInputFieldString = depostiInputFieldElement.value;
    const depostiInputField = parseFloat(depostiInputFieldString);

    if(isNaN(depostiInputField) ){
        alert ('please give a valid number');
        depostiInputFieldElement.value = '';
        return;
    }

    const depositedAmountElement = document.getElementById('withdraw-amount');
    const depositedAmountString = depositedAmountElement.innerText;
    const depositedAmount = parseFloat(depositedAmountString);

    const totalAmountElement = document.getElementById('total-amount');
    const totalAmountString = totalAmountElement.innerText;
    const totalAmount = parseFloat(totalAmountString)

    if(depostiInputField > totalAmount){
        alert ('You do not have enough money!!!')
        depostiInputFieldElement.value = '';
        return;
    }
    depositedAmountElement.innerText = depositedAmount + depostiInputField;
    


    totalAmountElement.innerText = totalAmount - depostiInputField;

    depostiInputFieldElement.value = '';

})