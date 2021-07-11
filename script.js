let myLibrary = JSON.parse(localStorage.getItem('newBook'))||[];//check our local storage
let newBook;

const formUp = document.querySelector('#formUp');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const status = document.querySelector('#is-read');
const booksList = document.querySelector('#booksList');


//open form by clicking New Book button
const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click',function(){
    formWrapper.style.display = 'block';
    form.reset();
});

//close form by clicking close button
const closeFormBtn = document.querySelector('#closeBtn');
closeFormBtn.addEventListener('click', ()=>formWrapper.style.display = 'none');

//add book to our library and display it
const addBookBtn = document.querySelector('#addBookBtn');
addBookBtn.addEventListener('click', function(){
    formWrapper.style.display = 'none';
    addBookToLibrary();
});

//clean form by clicking clean button
const cleanFormBtn = document.querySelector('#cleanBtn')
cleanFormBtn.addEventListener('click',()=>{
    event.preventDefault();
    form.reset();
       
});

//book constructor
class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

//add book to array
function addBookToLibrary(){
    event.preventDefault();
    
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

    readBtn.classList.add('readBtn');
    bookDiv.appendChild(readBtn);
    if(item.status == 1){
        readBtn.style.backgroundColor = 'green';
        readBtn.textContent = 'READ';
    }
    else{
        readBtn.style.backgroundColor = 'rgb(134, 51, 51)';
        readBtn.textContent = 'NOT READ'
    }

    library.appendChild(bookDiv);

    deleteBtn.addEventListener('click', ()=>{
        myLibrary.splice(myLibrary.indexOf(item),1);
        sendToStoreData();
        displayBooks();
    })

    readBtn.addEventListener('click', ()=>{
        item.status = !item.status;
        
        sendToStoreData();
        displayBooks();           
        
    })

}

//send and stores data to local storage
function sendToStoreData(){
    localStorage.setItem('newBook', JSON.stringify(myLibrary));     
}


//refresh our page
displayBooks();



