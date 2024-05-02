document.getElementById('visitorForm').addEventListener('submit', handleFormSubmission);

function setTodaysDateAndTime() {
    var now = new Date();
    var date = now.getFullYear() + '-' + (now.getMonth() + 1).toString().padStart(2, '0') + '-' + now.getDate().toString().padStart(2, '0');
    var time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    
    document.getElementById('date').value = date;
    document.getElementById('time').value = time;
}

function updateFormFields() {
    var selection = document.getElementById('visitorType').value;
    var addButton = document.getElementById('addNameButton');
    var nameInput = document.getElementById('name1'); // Ensure 'name1' is the correct ID for your name input field.

    console.log("Selected type:", selection); // Debugging output

    if (selection === "Group") {
        addButton.style.display = 'inline';
        nameInput.placeholder = 'Enter group member name';
        console.log("Group selected, updated placeholder to 'Enter group member name'"); // Debugging output
    } else if (selection === "Individual") {
        addButton.style.display = 'none';
        resetGroupNames(); // Ensure this function call is necessary or remove it if not.
        nameInput.placeholder = 'Write your name here';
        console.log("Individual selected, updated placeholder to 'Write your name here'"); // Debugging output
    }
}

var nameCount = 1;
function addGroupMember() {
    nameCount++;
    var container = document.getElementById('groupNames');
    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'name' + nameCount;
    input.name = 'name' + nameCount;
    input.placeholder = 'Enter group member name';
    container.appendChild(input);
}

function resetGroupNames() {
    var container = document.getElementById('groupNames');
    container.innerHTML = '';
    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'name1';
    input.name = 'name1';
    input.placeholder = 'Enter group member name';
    container.appendChild(input);
    nameCount = 1;
}

function handleFormSubmission(event) {
    event.preventDefault();
    alert('Form submitted! Check console for details.');
    var formData = new FormData(event.target);
    for (let key of formData.keys()) {
        console.log(key, formData.get(key));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTodaysDateAndTime();
});
