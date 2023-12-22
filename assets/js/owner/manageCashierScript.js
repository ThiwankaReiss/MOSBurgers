let customer=JSON.parse(localStorage.getItem('customerArray'));
let item=JSON.parse(localStorage.getItem('itemArray'));
let orderDetail=JSON.parse(localStorage.getItem('orderDetailArray'));
let order=JSON.parse(localStorage.getItem('orderArray'));
let cashier=JSON.parse(localStorage.getItem('cashierArray'));

let tblData=`
<tr >
    <th>
        Cashier Id
    </th>
    <th>
        Name
    </th>
    <th>
        Contact
    </th>
    <th>
        Email
    </th>
    <th>
        View Profile
    </th>
    <th>
        Delete
    </th>
</tr>
`
console.log(cashier);
cashier.forEach(element => {
    tblData+=`
<tr>
    <td>
        ${element.cashierId}
    </td>
    <td>
        ${element.name}
    </td>
    <td>
        ${element.contact}
    </td>
    <td>
        ${element.email}
    </td>
    <td>
        <button type="button" class="btn-background-1" onclick="view('${element.cashierId}')">View</button>
    </td> 
    <td>
        <button type="button" class="btn-background-1" onclick="deleteRow(this,'${element.cashierId}')">Delete</button>
    </td>
</tr>                                                   
`
});

document.getElementById('tbl').innerHTML=tblData;
function deleteRow(button, cashierId) {
    // Traverse up the DOM to the closest 'tr' element and remove it
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    
    cashier.forEach(element => {
        if(element.cashierId==cashierId){
            cashier.pop(element);
        }     
    });
    localStorage.setItem('cashierArray',JSON.stringify(cashier));
    
    order.forEach(element => {
        if(element.cashierId==cashierId){
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

function print() {

    // Get the HTML content of the div
    var content = document.getElementById("tbl");

    // Create an HTML2PDF instance
    var pdf = new html2pdf(content, {
        margin: 10,
        filename:'Manage_Cashier.pdf',
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
    
  
    // Generate the PDF and open it in a new window
    pdf.from().outputPdf().then(function(pdfOutput) {
      var blob = new Blob([pdfOutput], { type: "application/pdf" });
      var url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    });

}

function view(cashierId){

    let cashierObj =[cashierId];
    localStorage.setItem('cashierObj',JSON.stringify(cashierObj));
   
    window.location.href = '../cashier/homeCashierForm.html';
}

localStorage.setItem('customerArray',JSON.stringify(customer));
localStorage.setItem('itemArray',JSON.stringify(item));
localStorage.setItem('orderArray',JSON.stringify(order));
localStorage.setItem('orderDetailArray',JSON.stringify(orderDetail));
localStorage.setItem('cashierArray',JSON.stringify(cashier));