// Get the file input element and buttons
const fileInput = document.getElementById('fileInput');
const pdfButton = document.getElementById('pdfButton');
const docxButton = document.getElementById('docxButton');
const txtButton = document.getElementById('txtButton');

// Add click events for each button
pdfButton.addEventListener('click', function () {
  fileInput.accept = '.pdf'; // Set the file input to accept only PDFs
  fileInput.click(); // Trigger the file input dialog
});

docxButton.addEventListener('click', function () {
  fileInput.accept = '.docx'; // Set the file input to accept only DOCX
  fileInput.click(); // Trigger the file input dialog
});

txtButton.addEventListener('click', function () {
  fileInput.accept = '.txt'; // Set the file input to accept only TXT
  fileInput.click(); // Trigger the file input dialog
});
