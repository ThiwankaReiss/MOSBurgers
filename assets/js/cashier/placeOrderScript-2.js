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

function setValues(suggestion){
    console.log(suggestion);
    item.forEach(element => {
        if(element.itemCode==suggestion || element.name==suggestion){
            document.getElementById('itmName').value=element.name;
            document.getElementById('code').value=element.itemCode;
            document.getElementById('unitPrice').value=element.price;
            
            document.getElementById('discount').value=element.discount;
            custId=element.customerId;
        }
    });
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
localStorage.setItem('customerArray',JSON.stringify(customer));
localStorage.setItem('itemArray',JSON.stringify(item));
localStorage.setItem('orderArray',JSON.stringify(order));
localStorage.setItem('orderDetailArray',JSON.stringify(orderDetail));
localStorage.setItem('cashierArray',JSON.stringify(cashier));
localStorage.setItem('cashierObj',JSON.stringify(cashierObj));
