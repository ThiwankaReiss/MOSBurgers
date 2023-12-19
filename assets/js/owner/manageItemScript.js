
let tblData=`
        <tr>
            <th>
                Code
            </th>
            <th>
                Name
            </th>
            <th>
                Qty On Hand
            </th>
            <th>
                Unit Price
            </th>
            <th>
                Discount
            </th>
            <th>
                Delete
            </th>
            <th>
                Update
            </th>
        </tr>
        `


item.forEach(element => {
    tblData+=`
<tr>
    <td>
        ${element.getItemCode()}
    </td>
    <td>
        ${element.getName()}
    </td>
    <td>
        ${element.getQTyOnHand()}
    </td>
    <td>
        ${element.getPrice()}
    </td>
    <td>
        ${element.getDiscount()}
    </td>
    <td>
        <button type="button" class="btn-background-1" onclick="deleteRow(this,'${element.getItemCode()}')">Delete</button>
    </td>
    <td>
        <button type="button" class="btn-background-1" onclick="generatePDF()">Update</button>
    </td> 
</tr>                                                   
`
});

document.getElementById('tbl').innerHTML=tblData;
function deleteRow(button, itemCode) {
    // Traverse up the DOM to the closest 'tr' element and remove it
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    
    item.forEach(element => {
        if(element.itemCode==itemCode){
            item = item.filter(obj => obj !== element);
        }
    });
}

function print() {

    // Get the HTML content of the div
    var content = document.getElementById("tbl");

    // Create an HTML2PDF instance
    var pdf = new html2pdf(content, {
        margin: 10,
        filename:'Manage_Items.pdf',
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
    
  
    // Generate the PDF and open it in a new window
    pdf.from().outputPdf().then(function(pdfOutput) {
      var blob = new Blob([pdfOutput], { type: "application/pdf" });
      var url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    });

}

module.exports = item;
