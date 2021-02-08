let library = [];

const addButton = document.querySelector('#add-button');
const popupForm = document.querySelector('.form-container');
const closeButton = document.querySelector('#close-button');
const submitButton = document.querySelector('#submit-button');
const mainContainer = document.querySelector('.main-container');
const books = document.querySelectorAll('.book');
const titleField = document.querySelector('#book-title');
const authorField = document.querySelector('#book-author');
const pagesField = document.querySelector('#book-pages');

addButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);
submitButton.addEventListener('click', getLibrary);

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

Book.prototype.pushBook = function() {
    library.push(this)
}

function toggleForm() {
    if (popupForm.style.display === 'block') popupForm.style.display = 'none';
    else if (!addButton.style.display) {
        popupForm.style.display = 'block';
        titleField.focus();
        popupForm.reset();
    }
}

function getLibrary() {
    const statusField = document.querySelector('input[name=book-status]:checked');
    addBookToLibrary(titleField.value, authorField.value, pagesField.value, statusField.value);
    resetDisplay();
    for (let i = 0; i < library.length; i++) {
        createDisplay(library[i]);
    }
}

function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status);
    newBook.pushBook();
    popupForm.reset();
}

function resetDisplay() {
    while(mainContainer.firstChild) mainContainer.removeChild(mainContainer.firstChild);
}

function createDisplay(obj) {
    const bookContainerDiv = document.createElement('div');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const buttonsDiv = document.createElement('div');
    const deleteImg = document.createElement('img');
    const editImg = document.createElement('img');

    mainContainer.appendChild(bookContainerDiv);

    bookDiv.classList.add('book');
    bookContainerDiv.appendChild(bookDiv);

    titleDiv.textContent = obj.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = obj.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pagesDiv.textContent = obj.pages + ' Pages';
    pagesDiv.classList.add('pages');
    bookDiv.appendChild(pagesDiv);

    buttonsDiv.classList.add('buttons');
    bookContainerDiv.appendChild(buttonsDiv);

    deleteImg.classList.add('delete-button');
    deleteImg.src = 'images/trash.svg';
    buttonsDiv.appendChild(deleteImg);

    editImg.classList.add('edit-button');
    editImg.src = 'images/three-dots.svg';
    buttonsDiv.appendChild(editImg);
}
