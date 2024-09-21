

// document.getElementById('showAddMoney').addEventListener('click', function() {
//     document.getElementById('addMoneyForm').classList.remove('hidden');
//     document.getElementById('cashOutForm').classList.add('hidden');
//     document.getElementById('transaction-history').classList.add('hidden');

//     document.getElementById('add-btn').classList.add('btn-info');
//     document.getElementById('cashout-btn').classList.remove('btn-info');
//     document.getElementById('transaction-btn').classList.remove('btn-info');
// });

// document.getElementById('showCashOut').addEventListener('click', function() {
//     document.getElementById('cashOutForm').classList.remove('hidden');
//     document.getElementById('addMoneyForm').classList.add('hidden');
//     document.getElementById('transaction-history').classList.add('hidden');

//     document.getElementById('add-btn').classList.remove('btn-info');
//     document.getElementById('cashout-btn').classList.add('btn-info');
//     document.getElementById('transaction-btn').classList.remove('btn-info');
// });
// document.getElementById('showTransaction').addEventListener('click', function() {
//     document.getElementById('transaction-history').classList.remove('hidden');
//     document.getElementById('cashOutForm').classList.add('hidden');
//     document.getElementById('addMoneyForm').classList.add('hidden');

//     document.getElementById('transaction-btn').classList.add('btn-info');
//     document.getElementById('add-btn').classList.remove('btn-info');
//     document.getElementById('cashout-btn').classList.remove('btn-info');
    
// });


function showSectionById(id){
    document.getElementById('addMoneyForm').classList.add('hidden');
    document.getElementById('cashOutForm').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
function showBtnInfo(id){
    document.getElementById('add-btn').classList.remove('btn-info');
    document.getElementById('cashout-btn').classList.remove('btn-info');
    document.getElementById('transaction-btn').classList.remove('btn-info');

    document.getElementById(id).classList.add('btn-info');
}



document.getElementById('showAddMoney').addEventListener('click', function() {
    showSectionById('addMoneyForm');
    showBtnInfo('add-btn');
});

document.getElementById('showCashOut').addEventListener('click', function() {
    showSectionById('cashOutForm');
    showBtnInfo('cashout-btn');
});

document.getElementById('showTransaction').addEventListener('click', function() {
    showSectionById('transaction-history');
    showBtnInfo('transaction-btn');
});
