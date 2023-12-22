
let customer=JSON.parse(localStorage.getItem('customerArray'));
let item=JSON.parse(localStorage.getItem('itemArray'));
let orderDetail=JSON.parse(localStorage.getItem('orderDetailArray'));
let order=JSON.parse(localStorage.getItem('orderArray'));
let cashier=JSON.parse(localStorage.getItem('cashierArray'));
let cashierObj=JSON.parse(localStorage.getItem('cashierObj'));
console.log(cashier);
function updateCashier(){
    cashier.forEach(element => {
        if (element.cashierId==cashierObj) {
            element.name=document.getElementById('name').value;
            element.age=document.getElementById('age').value;
            element.email=document.getElementById('email').value;
            element.contact=document.getElementById('contact').value;
            element.city=document.getElementById('city').value;
            element.description=document.getElementById('description').value;
            
        }
    });
    console.log(cashier);
    localStorage.setItem('cashierArray',JSON.stringify(cashier));
    window.location.href = 'homeCashierForm.html';
}

localStorage.setItem('customerArray',JSON.stringify(customer));
localStorage.setItem('itemArray',JSON.stringify(item));
localStorage.setItem('orderArray',JSON.stringify(order));
localStorage.setItem('orderDetailArray',JSON.stringify(orderDetail));
localStorage.setItem('cashierArray',JSON.stringify(cashier));
localStorage.setItem('cashierObj',JSON.stringify(cashierObj));
