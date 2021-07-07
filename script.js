let myLibrary = [];

const formUp = document.querySelector('#formUp');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const status = document.querySelector('#isRead');
const booksList = document.querySelector('#booksList');
const form = document.querySelectorAll('#form');


//call form by clicking New Book button
const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click',()=>formUp.style.display = 'block');

//close form by clicking close button
const closeFormBtn = document.querySelector('#closeBtn');
closeFormBtn.addEventListener('click', ()=>formUp.style.display = 'none');

//add book to our library and display it
const addBookBtn = document.querySelector('#addBookBtn');
addBookBtn.addEventListener('click', ()=>{
    addBookToLibrary();
    displayBooks();
});


class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

function addBookToLibrary(){
    const newBook = new Book(title.value, author.value, pages.value, status.value);
    myLibrary.push(newBook);
    console.log(myLibrary);  
}

function displayBooks(){
    const display = document.querySelector('#booksList');
    const books = document.querySelectorAll('.book');
    books.forEach(book=>display.removeChild(book));

    for(let i=0; i<myLibrary.length; i++){
        createCardOfBook(myLibrary[i]);
    }
}

//creat new card for each book
function createCardOfBook(){
    const library = document.querySelector('#booksList');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const statusDiv = document.createElement('div');

    bookDiv.classList.add('book');

    titleDiv.textContent = title.value;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = author.value;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pagesDiv.textContent = pages.value;
    pagesDiv.classList.add('pages');
    bookDiv.appendChild(pagesDiv);

    statusDiv.textContent = status.value;
    statusDiv.classList.add('status');
    bookDiv.appendChild(statusDiv);

    library.appendChild(bookDiv);
}




