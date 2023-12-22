let customer=JSON.parse(localStorage.getItem('customerArray'));
let item=JSON.parse(localStorage.getItem('itemArray'));
let orderDetail=JSON.parse(localStorage.getItem('orderDetailArray'));
let order=JSON.parse(localStorage.getItem('orderArray'));
let cashier=JSON.parse(localStorage.getItem('cashierArray'));

console.log(customer);
let tblData=`
<tr >
    <th>
        Order ID
    </th>
    <th>
        Customer ID
    </th>
    <th>
        Extra Discount
    </th>
    <th>
        Amount
    </th>
    <th>
        Date
    </th>
    <th>
        Delete
    </th>
    <th>
        View Details
    </th>
</tr>
`


order.forEach(element => {
    tblData+=`
<tr>
    <td>
        ${element.orderId}
    </td>
    <td>
        ${element.customerId}
    </td>
    <td>
        ${element.addDiscount}
    </td>
    <td>
        ${getAmount(element.orderId)}
    </td>
    <td>
        ${element.date}
    </td>
    <td>
        <button type="button" class="btn-background-1" onclick="deleteRow(this,'${element.orderId}')">Delete</button>
    </td>
    <td>
        <button type="button" class="btn-background-1" onclick="viewDetails('${element.orderId}','${element.addDiscount}','${getAmount(element.orderId)}')">View</button>
    </td> 
</tr>                                                   
`
});

document.getElementById('tbl').innerHTML=tblData;
function deleteRow(button, customerId) {
    // Traverse up the DOM to the closest 'tr' element and remove it
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    
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
}

class Detail{
    constructor(code,name,unitPrice,quantity,discount,amount){
        this.code=code;
        this.name=name;
        this.unitPrice=unitPrice;
        this.quantity=quantity;
        this.discount=discount;
        this.amount=amount;
    }
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
            tot*=(100-element.addDiscount)*0.01
        }
    });
    return tot;
}

function viewDetails(orderId,addDiscount,amount){
    let detail =[];
    orderDetail.forEach(element => {
        if(element.orderId==orderId){
            
            
            item.forEach(eleitm => {
                if(eleitm.itemCode==element.code){
            
                    detail.push(new Detail(eleitm.itemCode,eleitm.name,eleitm.price,element.qty,eleitm.discount,eleitm.price*element.qty*(100-eleitm.discount)*0.01));
                }
            });
            
        }
    });
    localStorage.setItem('amount',JSON.stringify(amount));
    localStorage.setItem('addDiscount',JSON.stringify(addDiscount));
    localStorage.setItem('detailArray',JSON.stringify(detail));
    window.location.href = 'manageOrderDetails.html';
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