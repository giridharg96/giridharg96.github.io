document.getElementById('volunteerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var jsonData = {};
    formData.forEach(function(value, key){
      jsonData[key] = value;
    });
    
    fetch('https://script.google.com/macros/s/AKfycbzuoe4b1278I-YIKuFSop3Xnz1QZvt-Aei0Lwc_6MMQC6dhRwJsc8RkaBXAjMfInf8u/exec', {
      method: 'POST',
      body: JSON.stringify(jsonData)
    })
    .then(response => response.text())
    .then(data => {
      if(data === "Success") {
        alert('Thank you for volunteering!');
        document.getElementById('volunteerForm').reset();
      } else {
        alert('There was an error. Please try again.');
      }
    })
    .catch(error => console.error('Error:', error));
  });