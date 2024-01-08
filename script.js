//function to handle form submission
function submitForm() {
   const form = document.getElementById('form');
   const tableBody = document.querySelector('#userTable tbody');
 
//form values
   const firstName = form.elements['first-name'].value;
   const lastName = form.elements['last-name'].value;
   const address = form.elements.address.value;
   const pincode = form.elements.pincode.value;
   const gender = form.elements.gender.value;
   const food = Array.from(form.elements.food.options)
     .filter(option => option.selected)
     .map(option => option.value)
     .join(', ');
   const state = form.elements.state.value;
   const country = form.elements.country.value;

//row and cell creation
   const newRow = tableBody.insertRow();
   const cell1 = newRow.insertCell(0);
   const cell2 = newRow.insertCell(1);
   const cell3 = newRow.insertCell(2);
   const cell4 = newRow.insertCell(3);
   const cell5 = newRow.insertCell(4);
   const cell6 = newRow.insertCell(5);
   const cell7 = newRow.insertCell(6);
   const cell8 = newRow.insertCell(7);

//filling the form data in the cells
 
   cell1.textContent = firstName;
   cell2.textContent = lastName;
   cell3.textContent = address;
   cell4.textContent = pincode;
   cell5.textContent = gender;
   cell6.textContent = food;
   cell7.textContent = state;
   cell8.textContent = country;

//clearing the from fields
   form.reset();
 }
 