
let customer=JSON.parse(localStorage.getItem('customerArray'));
let item=JSON.parse(localStorage.getItem('itemArray'));
let orderDetail=JSON.parse(localStorage.getItem('orderDetailArray'));
let order=JSON.parse(localStorage.getItem('orderArray'));
let cashier=JSON.parse(localStorage.getItem('cashierArray'));
let cashierObj=JSON.parse(localStorage.getItem('cashierObj'));

cashier.forEach(element => {

    if(element.cashierId==cashierObj[0]){
        document.getElementById('cashier-detail').innerHTML=`<span style="text-decoration: underline;">Profile</span><br>
                                                            User Name : ${element.name}<br>
                                                            Age  : ${element.age}<br>
                                                            Gender  : ${element.gender}<br>
                                                            Experience  : ${element.experience}<br>
                                                            Email  : ${element.email}<br>
                                                            Contact  : ${element.contact}`

        document.getElementById('cashier-desctription').innerHTML=`<span style="text-decoration: underline;">Description</span>
                                                                <br>
                                                                ${element.description}`
    }


});
document.getElementById('id-txt').innerHTML="Cashier ID : "+cashierObj;


localStorage.setItem('customerArray',JSON.stringify(customer));
localStorage.setItem('itemArray',JSON.stringify(item));
localStorage.setItem('orderArray',JSON.stringify(order));
localStorage.setItem('orderDetailArray',JSON.stringify(orderDetail));
localStorage.setItem('cashierArray',JSON.stringify(cashier));
localStorage.setItem('cashierObj',JSON.stringify(cashierObj));
