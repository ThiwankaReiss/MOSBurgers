let customer=JSON.parse(localStorage.getItem('customerArray'));
let item=JSON.parse(localStorage.getItem('itemArray'));
let orderDetail=JSON.parse(localStorage.getItem('orderDetailArray'));
let order=JSON.parse(localStorage.getItem('orderArray'));
let cashier=JSON.parse(localStorage.getItem('cashierArray'));
let cashierObj=JSON.parse(localStorage.getItem('cashierObj'));
let custId=JSON.parse(localStorage.getItem('custId'));
// Sample array of search suggestions
const suggestionsArray = [];
item.forEach(element => {
    suggestionsArray.push(element.name);
});
item.forEach(element => {
    suggestionsArray.push(element.itemCode);
});
console.log(custId);
customer.forEach(element => {
    if(element.customerId=custId){
        document.getElementById('cust-detail').innerHTML=element.contact+" - "+element.customerId+" - "+element.name;
    }
});


var num=0;

function showSuggestions() {
    const input = document.getElementById('search-bar');
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestionsContainer.innerHTML = '';

    if (input.value.trim() !== '') {
        const filteredSuggestions = suggestionsArray.filter(suggestion =>
            suggestion.toLowerCase().includes(input.value.toLowerCase())
        );

        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(suggestion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.className = 'suggestion-item';
                suggestionItem.textContent = suggestion;
                suggestionItem.addEventListener('click', () => {
                    input.value = suggestion;
                    suggestionsContainer.style.display = 'none';
                });

                suggestionsContainer.appendChild(suggestionItem);
            });

            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    } else {
        suggestionsContainer.style.display = 'none';
    }
}
function showALlSuggestions(){
    const input = document.getElementById('search-bar');
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestionsContainer.innerHTML = '';
    if(num==0){
        num=1;
    }
    if(num==1){
        suggestionsArray.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = suggestion;
            suggestionItem.addEventListener('click', () => {
                input.value = suggestion;
                suggestionsContainer.style.display = 'none';
                setValues(suggestion);
            });
    
            suggestionsContainer.appendChild(suggestionItem);
        });
        suggestionsContainer.style.display = 'block';
        
    }
    
}
let itmCode;
function setValues(suggestion){
    console.log(suggestion);
    item.forEach(element => {
        if(element.itemCode==suggestion || element.name==suggestion){
            document.getElementById('itmName').value=element.name;
            document.getElementById('itmName').readOnly = true;
            document.getElementById('code').value=element.itemCode;
            document.getElementById('code').readOnly = true;
            document.getElementById('unitPrice').value=element.price;
            document.getElementById('unitPrice').readOnly = true;
            document.getElementById('discount').value=element.discount;
            document.getElementById('discount').readOnly = true;
            itmCode=element.itemCode;
            calculateAmount();
        }
    });
}

function calculateAmount(){
    
    if(itmCode!=null && itmCode!=""){

        item.forEach(element => {
            if (element.itemCode==itmCode) {
                let qty=document.getElementById('qty').value;
                console.log(qty);
                document.getElementById('amount').value=element.price*qty*0.01*(100-element.discount);
                document.getElementById('amount').readOnly = true;
            }
        });
        
    }
}


// Close suggestions when clicking outside the search bar
window.addEventListener('click', (event) => {
    const suggestionsContainer = document.getElementById('suggestions-container');
    if (event.target !== document.getElementById('search-bar') && !suggestionsContainer.contains(event.target) && num==0 ) {
        suggestionsContainer.style.display = 'none';
    }
    if(num==1){
        num=0;
    }
});
let orderId='O' + ('000' + order.length).slice(-3)
document.getElementById('order-id-txt').innerHTML="Order ID : "+orderId;

let details=[];
function addTblRow(){
    let tblData=`
                <tr >
                    <th>
                        Code
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Unit Price
                    </th>
                    <th>
                        Qty
                    </th>
                    <th>
                        Discount
                    </th>
                    <th>
                        Amount
                    </th>
                    <th>
                        Delete
                    </th>
                    <th>
                        Update
                    </th>
                </tr>
                `
    
    
    details.push(
        new OrderDetail(
            orderId,
            document.getElementById('code').value,
            document.getElementById('qty').value
        )
    );
    
    details.forEach(element => {
        let itm1;
        item.forEach(itm => {
            if (itm.itemCode==element.code) {
                itm1=itm;
            }
        });
        tblData+=`
    <tr>
        <td>
            ${itm1.itemCode}
        </td>
        <td>
            ${itm1.name}
        </td>
        <td>
            ${itm1.price}
        </td>
        <td>
            ${element.qty}
        </td>
        <td>
            ${itm1.discount}
        </td>
        <td>
            ${itm1.price*element.qty*(100-itm1.discount)}
        </td>
        <td>
            <button type="button" class="btn-background-1" onclick="deleteRow(this,'${itm1.code}')">Delete</button>
        </td>
        <td>
            <button type="button" class="btn-background-1" onclick="generatePDF()">Update</button>
        </td> 
    </tr>                                                   
    `
    });

    document.getElementById('tbl').innerHTML=tblData;

}
function deleteRow(button, customerId) {
    // Traverse up the DOM to the closest 'tr' element and remove it
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    
    customer.forEach(element => {
        if(element.customerId==customerId){
            customer.pop(element);
        }     
    });
    localStorage.setItem('customerArray',JSON.stringify(customer));
    
    order.forEach(element => {
        if(element.customerId==customerId){
            orderDetail.forEach(detilOdr => {
                if(element.orderId=detilOdr.orderDetail){
                    detilOdr.pop();
                }
            });
            order.pop(element);
        }
    });
    localStorage.setItem('orderArray',JSON.stringify(order));
    localStorage.setItem('orderDetailArray',JSON.stringify(orderDetail));

}

function openPage(){
     // Specify the path to the new HTML file
     var newHTMLFilePath = '../../view/placeOrderForm-2.html';
        
     // Open the new HTML file in the same window
     window.location.href = newHTMLFilePath;
}

function openPlaceOrder3(){
    // Specify the path to the new HTML file
    var newHTMLFilePath = '../../view/cashier/placeOrderForm-3.html';
       
    // Open the new HTML file in the same window
    window.location.href = newHTMLFilePath;

}

class OrderDetail{
    constructor(orderId,code,qty){
        this.orderId=orderId;
        this.code=code;
        this.qty=qty;
    }
}
localStorage.setItem('customerArray',JSON.stringify(customer));
localStorage.setItem('itemArray',JSON.stringify(item));
localStorage.setItem('orderArray',JSON.stringify(order));
localStorage.setItem('orderDetailArray',JSON.stringify(orderDetail));
localStorage.setItem('cashierArray',JSON.stringify(cashier));
localStorage.setItem('cashierObj',JSON.stringify(cashierObj));
