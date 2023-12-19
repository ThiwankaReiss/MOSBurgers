let cust=localStorage.getItem('customerArray');
let customer=JSON.parse(cust);
let itm=localStorage.getItem('itemArray');
let item=JSON.parse(itm);
let odrDetail=localStorage.getItem('orderDetailArray');
let orderDetail=JSON.parse(odrDetail);
let odr=localStorage.getItem('orderArray');
let order=JSON.parse(odr);
let det=localStorage.getItem('detailArray');
let detail=JSON.parse(det);

let addDiscount=JSON.parse(localStorage.getItem('addDiscount'));
let amount=JSON.parse(localStorage.getItem('amount'));

document.getElementById('loyalty-dis-txt').innerHTML="Loyalty Discount : "+addDiscount+"%";
document.getElementById('total-txt').innerHTML="Total : "+"Rs:"+amount;
let tblData=`
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
`


detail.forEach(element => {
    tblData+=`
<tr>
    <td>
        ${element.code}
    </td>
    <td>
        ${element.name}
    </td>
    <td>
        ${element.unitPrice}
    </td>
    <td>
        ${element.quantity}
    </td>
    <td>
        ${element.discount}
    </td>
    <td>
        ${element.amount}
    </td>
</tr>                                                   
`
});

document.getElementById('tbl').innerHTML=tblData;
// function deleteRow(button, customerId) {
//     // Traverse up the DOM to the closest 'tr' element and remove it
//     let row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
    
//     orderDetail.forEach(element => {
//         if(element.customerId==customerId){
//             orderDetail = orderDetail.filter(obj => obj !== element);
            
//         }
//     });
// }



localStorage.setItem('customerArray',JSON.stringify(customer));
localStorage.setItem('itemArray',JSON.stringify(item));
localStorage.setItem('orderArray',JSON.stringify(order));
localStorage.setItem('orderDetailArray',JSON.stringify(orderDetail));