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
        Quantity
    </th>
    <th>
        Amount
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
        ${getQtyPerCust(element.customerId)}
    </td>
    <td>
        ${getTotPerCust(element.customerId)}
    </td> 
</tr>                                                   
`
});

//----------------------------------
function getQtyPerCust(customerId){
    let totQTy=0;
    order.forEach(element => {
        if(element.customerId==customerId){
            totQTy+=getQty(element.orderId)
        }
    });
    return totQTy;
}
function getQty(orderId){
    let tot=0;
    orderDetail.forEach(element => {
        if(element.orderId==orderId){
            tot+=element.qty; 
        }
    });
    return tot;
}

//----------------------------------
function getTotPerCust(customerId){
    let tot=0;
    order.forEach(element => {
        if(element.customerId==customerId){
            tot+=getAmount(element.orderId)
        }
    });
    return tot;
}
function getAmount(orderId){
    let tot=0;
    orderDetail.forEach(element => {
        if(element.orderId==orderId){

            item.forEach(eleitm => {
                if(eleitm.itemCode==element.code){    
                  tot+= eleitm.price*element.qty*(100-eleitm.discount)*0.01;
                }
            });
            
            
        }
    });

    order.forEach(element => {
        if(element.orderId==orderId){
            tot*=(100-element.addDiscount)*0.01;
        }
    });
    return tot;
}

//----------------------------------
document.getElementById('tbl').innerHTML=tblData;
function print() {

    // Get the HTML content of the div
    var content = document.getElementById("tbl");

    // Create an HTML2PDF instance
    var pdf = new html2pdf(content, {
        margin: 10,
        filename:'All_Customers.pdf',
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