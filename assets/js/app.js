function signIn(){
    let password= document.getElementById('password-input').value;
    let name= document.getElementById('name-input').value;
    const nameArray=["Nimal","Amal","Wimal","Kamal"];
    const passwordArray=["Nimal1","Amal1","Wimal1","Kamal1"];

    if(password=="Thiwanka" && name=="Reiss"){


                
        // Open the new HTML file in the same window
        window.location.href = 'assets/view/owner/homeOwnerForm.html';

    }else{
        for (let index = 0; index < nameArray.length; index++) {
            nameArray[index];
            if(name==nameArray[index] && password==passwordArray[index]){
                window.location.href = 'assets/view/cashier/homeCashierForm.html';
            }
            
        }
    }
}


localStorage.setItem('customerArray',JSON.stringify(customer));
localStorage.setItem('itemArray',JSON.stringify(item));
localStorage.setItem('orderArray',JSON.stringify(order));
localStorage.setItem('orderDetailArray',JSON.stringify(orderDetail));
localStorage.setItem('cashierArray',JSON.stringify(cashier));