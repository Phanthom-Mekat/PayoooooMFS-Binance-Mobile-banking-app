document.getElementById('cash-out-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const cashOutAmount = document.getElementById('cash-out-amount').value;


    const pinNumber = document.getElementById('cashout-pin-number').value;

    const balance =document.getElementById('balance').innerText;
    

    const total = parseInt(balance) - parseInt(cashOutAmount);


    if(pinNumber==='1234' && total>=0 ){
        document.getElementById('balance').innerText = total;
        localStorage.setItem('balance', total);
        // cashout history
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex justify-between items-center p-3  rounded-lg drop-shadow my-2">
            <div>
                <p class="text-sm font-bold">Cash Out</p>
                <p class="text-xs text-gray-500 mr-2">Amount: $${cashOutAmount}</p>
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
    else if(total<=0){
        showAlert('Insufficient balance');
    }
    else{
        showAlert('Invalid pin number');
    }
    //clear both input fields

    document.getElementById('cash-out-amount').value = '';
    document.getElementById('cashout-pin-number').value = '';
    document.getElementById('bank2').value = 'Select bank';
});