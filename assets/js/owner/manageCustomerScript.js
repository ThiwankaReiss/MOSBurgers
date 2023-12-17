class Customer{
    constructor(customerId,name,contact,email){
        this.customerId=customerId;
        this.name=name;
        this.contact=contact,
        this.email=email;
    }
    getCustomerId(){
        return this.customerId;
    }
    getName(){
        return this.name;
    }
    getContact(){
        return this.contact;
    }
    getEmail(){
        return this.email;
    }
}


let customer=[new Customer('C001','Nimal','0772445070', 'Nimal*@gmail.com')
        ,new Customer('C002','Amal','0772445071', 'Amal*@gmail.com')
        ,new Customer('C003','Wimal','0772445072', 'Wimal*@gmail.com')
        ,new Customer('C004','Kamal','0772445073', 'Kamal*@gmail.com')
        ,new Customer('C005','Sumimal','0772445074', 'Sumimal*@gmail.com')
        ,new Customer('C006','Ranmal','0772445075', 'Ranmal*@gmail.com')
        ,new Customer('C007','Hemal','0772445076', 'Hemal*@gmail.com')
    ];
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
        ${element.getCustomerId()}
    </td>
    <td>
        ${element.getName()}
    </td>
    <td>
        ${element.getContact()}
    </td>
    <td>
        ${element.getEmail()}
    </td>
    <td>
        <button type="button" class="btn-background-1" onclick="deleteRow(this,'${element.getCustomerId()}')">Delete</button>
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
            customer = customer.filter(obj => obj !== element);
        }
    });
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