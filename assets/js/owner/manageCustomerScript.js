let customer=JSON.parse(localStorage.getItem('customerArray'));
let item=JSON.parse(localStorage.getItem('itemArray'));
let orderDetail=JSON.parse(localStorage.getItem('orderDetailArray'));
let order=JSON.parse(localStorage.getItem('orderArray'));
let cashier=JSON.parse(localStorage.getItem('cashierArray'));
let tblData=`
<tr >
    <th>
        Customer Id
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
        Delete
    </th>
    <th>
        Update
    </th>
</tr>
`


customer.forEach(element => {
    tblData+=`
<tr>
    <td>
        ${element.customerId}
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
        <button type="button" class="btn-background-1" onclick="deleteRow(this,'${element.customerId}')">Delete</button>
    </td>
    <td>
        <button type="button" class="btn-background-1" onclick="generatePDF()">Update</button>
    </td> 
</tr>                                                   
`
});

document.getElementById('tbl').innerHTML=tblData;
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

function print() {

    // Get the HTML content of the div
    var content = document.getElementById("tbl");

    // Create an HTML2PDF instance
    var pdf = new html2pdf(content, {
        margin: 10,
        filename:'Manage_Customers.pdf',
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
    
  
    // Generate the PDF and open it in a new window
    pdf.from().outputPdf().then(function(pdfOutput) {
      var blob = new Blob([pdfOutput], { type: "application/pdf" });
      var url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    });

}

localStorage.setItem('customerArray',JSON.stringify(customer));
localStorage.setItem('itemArray',JSON.stringify(item));
localStorage.setItem('orderArray',JSON.stringify(order));
localStorage.setItem('orderDetailArray',JSON.stringify(orderDetail));
localStorage.setItem('cashierArray',JSON.stringify(cashier));