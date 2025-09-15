// Grab elements once
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        // Create elements
        const li = document.createElement("li");
        const delBtn = document.createElement("button");

        // Set content
        li.textContent = input.value;
        delBtn.textContent = "❌";

        // Add delete button to li
        li.append(delBtn);
        list.append(li);

        // Delete functionality
        delBtn.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Reset input
        input.value = '';
        input.focus();
    } else {
        alert("Please fill in the blanks");
        input.focus();
    }
});