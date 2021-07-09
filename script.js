let myLibrary = JSON.parse(localStorage.getItem('newBook'))||[];//check our local storage
let newBook;

const formUp = document.querySelector('#formUp');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const status = document.querySelector('#isRead');
const booksList = document.querySelector('#booksList');


//call form by clicking New Book button
const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click',function(){
    formUp.style.display = 'block';
    
});

//close form by clicking close button
const closeFormBtn = document.querySelector('#closeBtn');
closeFormBtn.addEventListener('click', ()=>formUp.style.display = 'none');

//add book to our library and display it
const addBookBtn = document.querySelector('#addBookBtn');
addBookBtn.addEventListener('click', function(){
    addBookToLibrary();
    
});

//book constructor
class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status.checked;
    }
}

//add book to array
function addBookToLibrary(){
    event.preventDefault();
    formUp.style.display = 'none';

    newBook = new Book(title.value, author.value, pages.value, status.value);
    myLibrary.push(newBook);
    sendToStoreData();
    displayBooks();
        
}

//display added books from array
function displayBooks(){
    const books = document.querySelectorAll('.book');
    books.forEach(book => booksList.removeChild(book));

    for(let i=0; i<myLibrary.length; i++){
        createCardOfBook(myLibrary[i]);
    }
}

//create new card for each book
function createCardOfBook(item){
    const library = document.querySelector('#booksList');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pagesDiv.textContent = item.pages+ ' pages';
    pagesDiv.classList.add('pages');
    bookDiv.appendChild(pagesDiv);

    deleteBtn.textContent = 'DELETE';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.setAttribute('id', 'deleteBtn');
    bookDiv.appendChild(deleteBtn);

   /* readBtn.classList.add('readBtn');
    bookDiv.appendChild(readBtn);
    if(item.status===true){
        readBtn.style.backgroundColor = 'green';
        readBtn.textContent = 'Read'
    }
    else{
        readBtn.style.backgroundColor = 'red';
        readBtn.textContent = 'Not read'
    }*/

    library.appendChild(bookDiv);

    deleteBtn.addEventListener('click', ()=>{
        myLibrary.splice(myLibrary.indexOf(item),1);
        sendToStoreData();
        displayBooks();
    })

    /*readBtn.addEventListener('click', ()=>{
        if(item.status=!item.status){readBtn.style.backgroundColor = 'green'}
        else{readBtn.style.color='red'}
        
    })*/

}

//send and stores data to local storage
function sendToStoreData(){
    localStorage.setItem('newBook', JSON.stringify(myLibrary));     
}

//refresh our page
displayBooks();



