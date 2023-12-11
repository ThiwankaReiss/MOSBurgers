
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