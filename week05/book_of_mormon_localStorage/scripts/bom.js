// Grab elements once
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

//Diplay any saved chapters
chaptersArray.forEach(chapter => displayList(chapter));

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {

        if (input.value.trim() !== '') {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
        } else {
            alert("Please fill in the blanks");
            input.focus
        }

        function displayList(item) {
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
        }

       
        // Reset input
        input.value = '';
        input.focus();
    } else {
        alert("Please fill in the blanks");
        input.focus();
    }
});

//Display a chapter in the list

function displayList(item) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");

    li.textContent = item;
    delBtn.textContent = "❌";

    li.append(delBtn);
    list.append(li);

    //delete functionality
    delBtn.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// Save to localStorage

function setChapterList() {
    localStorage.setItem('myChapters', JSON.stringify(chaptersArray))
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myChapters'));
}


function deleteChapter(chapter) {
    //Removing the delete button from chapter
    chapter = chapter.slice(0, chapter.lenght -1);

    chaptersArray = chaptersArray.filter(item => item !== chapter);

    setChapterList();
}