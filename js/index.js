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
            if (inputAmount <= 0 || isNaN(inputAmount) || accountBalance < inputAmount) {
                alert ('invalid input');
            } else {
                newDonationAmount = donationAmount + inputAmount;
            document.getElementById('donation-amount').innerText = newDonationAmount;
            newBalance = accountBalance - inputAmount;
            document.getElementById('account-balance').innerText = newBalance;
            my_modal_1.showModal();
            }
        }) 
    }
    clickBtn('btn-1')
        function clickBtn2(id) {
            document.getElementById(id).addEventListener('click', function(event){
                event.preventDefault();
                const accountBalance = getTextFieldValueById('account-balance');
                const donationAmount = getTextFieldValueById('donation-amount2');
                const inputAmount = getInputFieldValueById('input-amount2');
                if (inputAmount <= 0 || isNaN(inputAmount) || accountBalance < inputAmount) {
                    alert ('invalid input');
                } else {
                newDonationAmount = donationAmount + inputAmount;
                document.getElementById('donation-amount2').innerText = newDonationAmount;
                newBalance = accountBalance - inputAmount;
                document.getElementById('account-balance').innerText = newBalance;
                my_modal_2.showModal();
                } 
            }) 
        }
    clickBtn2('btn-2');
        function clickBtn3(id) {
            document.getElementById(id).addEventListener('click', function(event){
                event.preventDefault();
                const accountBalance = getTextFieldValueById('account-balance');
                const donationAmount = getTextFieldValueById('donation-amount3');
                const inputAmount = getInputFieldValueById('input-amount3');
                if (inputAmount <= 0 || isNaN(inputAmount) || accountBalance < inputAmount) {
                    alert ('invalid input');
                } else {
                newDonationAmount = donationAmount + inputAmount;
                document.getElementById('donation-amount3').innerText = newDonationAmount;
                newBalance = accountBalance - inputAmount;
                document.getElementById('account-balance').innerText = newBalance;
                my_modal_3.showModal();
                }
            }) 
        }
    clickBtn3('btn-3');

        document.getElementById('show-history').addEventListener('click', function(){
            showSectionById('history-doc')
            showColorById('show-history');
        })
        document.getElementById('show-donation').addEventListener('click', function(){
            showSectionById('donation-doc');
            showColorById('show-donation');
        })

        function showSectionById(id) {
            document.getElementById('donation-doc').classList.add('hidden');
            document.getElementById('history-doc').classList.add('hidden');
            document.getElementById(id).classList.remove('hidden');
        }
    function showColorById(id) {
        document.getElementById('show-donation').classList.remove('bg-[#B4F461]');
        document.getElementById('show-history').classList.remove('bg-[#B4F461]', 'bg-inherit');
        document.getElementById(id).classList.add('bg-[#B4F461]');
    }   
document.getElementById('blog-button').addEventListener('click', function(){
    window.location.href = 'https://saikat1076.github.io/B-10-assignment-5/blog.html';
})

document.getElementById('home-btn').addEventListener('click', function(){
    window.location.href = 'https://saikat1076.github.io/B-10-assignment-5/index.html';
    
})