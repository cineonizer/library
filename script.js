let myLibrary = [];

const addButton = document.querySelector('.add-button-container');
const popupForm = document.querySelector('.form-container');
const closeButton = document.querySelector('.close-container');
const submitButton = document.querySelector('.submit-container');


addButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);
submitButton.addEventListener('click', getForm);

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

Book.prototype.pushBook = function() {
    myLibrary.push(this)
}

function toggleForm() {
    if (popupForm.style.display === 'block') popupForm.style.display = 'none';
    else if (addButton.style.display === '') {
        popupForm.style.display = 'block';
        popupForm.reset();
    }
}

function getForm() {
    const titleField = document.querySelector('#book-title');
    const authorField = document.querySelector('#book-author');
    const pagesField = document.querySelector('#book-pages');
    const statusField = document.querySelector('input[name=book-status]:checked');

    console.log(titleField.value);
    console.log(authorField.value);
    console.log(pagesField.value);
    console.log(statusField.value);
}
