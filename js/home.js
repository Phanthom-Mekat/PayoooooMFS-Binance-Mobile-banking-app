document.getElementById('money-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;


    const pinNumber = document.getElementById('pin-number').value;

    const balance =document.getElementById('balance').innerText;
    
    const total = parseInt(balance) + parseInt(amount);
    
    
    if(pinNumber==='1234' && total>=0 ){
        document.getElementById('balance').innerText = total;
        localStorage.setItem('balance', total);
        // cashout history
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex justify-between items-center p-3  rounded-lg drop-shadow my-2">
            <div>
                <p class="text-sm font-bold">Cash In</p>
                <p class="text-xs text-gray-500 mr-2">Amount: $${amount}</p>
            </div>
            <div>
                <p class="text-sm mr-1 font-bold">New Balance: $${total}</p>
                <p class="text-xs text-gray-500">Date: ${new Date().toLocaleString()}</p>
            </div>
        </div>
    `;	
        document.getElementById('transaction-history').appendChild(div);
        localStorage.setItem('transactions', document.getElementById('transaction-history').innerHTML);
    }
    else{
        showAlert('Invalid pin number');
    }
    //clear both input fields
    document.getElementById('amount').value = '';
    document.getElementById('pin-number').value = '';
    document.getElementById('bank').value = 'Select bank';
    
});
