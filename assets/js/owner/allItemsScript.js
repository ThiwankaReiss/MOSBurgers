let cust=localStorage.getItem('customerArray');
let customer=JSON.parse(cust);
let itm=localStorage.getItem('itemArray');
let item=JSON.parse(itm);
let odrDetail=localStorage.getItem('orderDetailArray');
let orderDetail=JSON.parse(odrDetail);
let odr=localStorage.getItem('orderArray');
let order=JSON.parse(odr);

let tblData=`
<tr >
    <th>
        Code
    </th>
    <th>
        Name
    </th>
    <th>
        Quantity
    </th>
    <th>
        Amount
    </th>
</tr>
`
// let customerArangedTot=[];
// customer.forEach(element => {
//     customerArangedTot.push(getQtyPerCust(element.customerId));
    
// });

// let customerAranged=customer;
// for (let i = 0; i < customerArangedTot.length-1; i++) {
//     for (let j = 0; j < customerArangedTot.length-1; j++) {
//         if(customerArangedTot[j+1]<customerArangedTot[j]){
//             let t=customerAranged[j];
//             customerAranged[j]=customerAranged[j+1];
//             customerAranged[j+1]=t;
            

//             let t1=customerArangedTot[j];
//             customerArangedTot[j]=customerArangedTot[j+1];
//             customerArangedTot[j+1]=t1;

//         }
//     }
    
// }
item.forEach(element => {
    tblData+=`
<tr>
    <td>
        ${element.itemCode}
    </td>
    <td>
        ${element.name}
    </td>
    <td>
        ${getQtyPerItem(element.itemCode)}
    </td>
    <td>
        ${getTotPerItem(element.itemCode)}
    </td> 
</tr>                                                   
`
});

//----------------------------------

function getQtyPerItem(itemCode){
    let tot=0;
    orderDetail.forEach(element => {
        if(element.code==itemCode){
            tot+=element.qty; 
        }
    });
    return tot;
}

//----------------------------------
function getTotPerItem(itemCode){
    let tot=0;
    orderDetail.forEach(element => {
        if(element.code==itemCode){

            item.forEach(eleitm => {
                if(eleitm.itemCode==element.code){    
                  tot+= eleitm.price*element.qty*(100-eleitm.discount)*0.01;
                }
            });         
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
        filename:'Best_Customers_Qty.pdf',
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