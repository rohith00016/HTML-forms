function submitForm() {
   const form = document.getElementById('form');
   const tableBody = document.querySelector('#userTable tbody');
 
   // Form values
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
 
   // Validation
   if (!firstName || !lastName || !address || !pincode || !gender || food.length === 0 || !state || !country) {
     alert("Please fill in all the fields.");
     return;
   }
 
   // Additional validation for selected food items
   if (food.split(',').length < 2) {
     alert("Please select at least 2 food items.");
     return;
   }
 
   // Row and cell creation
   const newRow = tableBody.insertRow();
   const cells = [
     newRow.insertCell(0),
     newRow.insertCell(1),
     newRow.insertCell(2),
     newRow.insertCell(3),
     newRow.insertCell(4),
     newRow.insertCell(5),
     newRow.insertCell(6),
     newRow.insertCell(7)
   ];
 
   // Filling the form data in the cells
   cells[0].textContent = firstName;
   cells[1].textContent = lastName;
   cells[2].textContent = address;
   cells[3].textContent = pincode;
   cells[4].textContent = gender;
   cells[5].textContent = food;
   cells[6].textContent = state;
   cells[7].textContent = country;
 
   // Clearing the form fields
   form.reset();
 }
 
