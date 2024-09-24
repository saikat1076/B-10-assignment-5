function getTextFieldValueById(id) {
const text = parseFloat(document.getElementById(id).innerText);
return text;
}
function getInputFieldValueById(id) {
const value = parseFloat(document.getElementById(id).value);
return value;
}
function clickBtn(id) {
    document.getElementById(id).addEventListener('click', function(event){
        event.preventDefault();
        const accountBalance = getTextFieldValueById('account-balance');
        const donationAmount = getTextFieldValueById('donation-amount');
        const inputAmount = getInputFieldValueById('input-amount');
        
        
        newDonationAmount = donationAmount + inputAmount;
        document.getElementById('donation-amount').innerText = newDonationAmount;
        newBalance = accountBalance - inputAmount;
        document.getElementById('account-balance').innerText = newBalance;
        
    })
        

}
// document.getElementById('btn-1').addEventListener('click', function(){
    console.log(clickBtn('btn-1'));
    
// })

