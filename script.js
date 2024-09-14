document.getElementById('ageForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const dob = new Date(document.getElementById('dob').value);
  const today = new Date();

  if (dob > today) {
      document.getElementById('result').innerHTML = "Date of birth cannot be in the future!";
      return;
  }

  let age = today.getFullYear() - dob.getFullYear();
  const month = today.getMonth() - dob.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
      age--;
  }

  document.getElementById('result').innerHTML = `${age} years old`;
});