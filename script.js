const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookStatus = document.querySelector('#status');
const bookList = document.querySelector('.booklist');


let myLibrary = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function(){
        return (`${title} by ${author}, ${pages} pages, ${status}`);
    }
}

//let someNewBook = new Book('Finansist','T.Drizer', '250', 'readen');
//let otherNewBook = new Book('Titan', 'T.Drizer', '300', 'not readen yet');
//let elseOneNewBook = new Book('Titan', 'T.Drizer', '300', 'not readen yet');
let someNewBook = 'Finansist';
let otherNewBook = 'Titan';
let elseOneNewBook = 'Stoik';

function addBookToLibrary(){
    myLibrary.push(someNewBook);
    myLibrary.push(otherNewBook);
    myLibrary.push(elseOneNewBook)
    console.log(myLibrary);
}

function getDisplayedEachBook(){
    let card = '<div>'
    myLibrary.forEach(function(book){
        card += '<div class="card">'+book+'</div>';
    });
    
    card +='</div>';
    bookList.innerHTML = card;
    
}


//Called functions
addBookToLibrary();
getDisplayedEachBook();




