let customer=JSON.parse(localStorage.getItem('customerArray'));
let item=JSON.parse(localStorage.getItem('itemArray'));
let orderDetail=JSON.parse(localStorage.getItem('orderDetailArray'));
let order=JSON.parse(localStorage.getItem('orderArray'));
let cashier=JSON.parse(localStorage.getItem('cashierArray'));
let cashierObj=JSON.parse(localStorage.getItem('cashierObj'));
function generatePDF() {
    // Get the HTML content of the div
    var content = document.getElementById("content");

    // Create an HTML2PDF instance
    var pdf = new html2pdf(content, {
        margin: 10,
        filename:'notifications.pdf',
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
  localStorage.setItem('cashierObj',JSON.stringify(cashierObj));