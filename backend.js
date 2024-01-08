let myLibrary = [];

function Book (name, author, pages, index){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.index = index;
}

function addBookToLibrary(n,a,p){
    myLibrary.push(new Book(n,a,p,myLibrary.length));
    console.log(myLibrary);
    displayBooks();
}

let booksContainer = document.querySelector('#books-container');

function displayBooks(){
    console.log(booksContainer);
    while(booksContainer.firstChild){
        booksContainer.removeChild(booksContainer.lastChild);
    }
    myLibrary.forEach((book) => {
        let b = document.createElement('div');
        b.classList.add('book');
        let name = document.createElement('p');
        name.classList.add('name');
        name.textContent = book.name;
        b.appendChild(name);
        let author = document.createElement('p');
        author.classList.add('author');
        author.textContent = book.author;
        b.appendChild(author);
        let pages = document.createElement('p');
        pages.classList.add('pages');
        pages.textContent = book.pages;
        b.appendChild(pages);
        let read = document.createElement('button');
        read.classList.add('read');
        read.addEventListener('click', () => {
            if (book.read){
                read.textContent = 'Read';
            }else {
                read.textContent = 'Unread';
            }
            displayBooks();
        });
        b.appendChild(read);
        let removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.addEventListener('click', () => {
            myLibrary.splice(book.index,1);
            displayBooks();
        });
        b.appendChild(removeButton);
        booksContainer.appendChild(b);
    });
    
}

const addPopup = document.querySelector('#add-popup');
function showAddPopup() {
    addPopup.classList.add("show");
    addPopup.style.display = "flex";
  }
const addBookButton = document.querySelector('#add-book-button');
addBookButton.addEventListener('click', showAddPopup);
//add popup button





const submitButton = document.querySelector('#submit');
submitButton.addEventListener("click", (event) => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let numPages = document.getElementById("num-pages").value;
    addBookToLibrary(title,author,numPages);
    resetInputValues();
    addPopup.classList.remove("show");
    addPopup.style.display = "none";
    event.preventDefault();
})

function resetInputValues(){
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("num-pages").value = "";
    document.getElementById("title").placeholder = "Title";
    document.getElementById("author").placeholder = "Author";
    document.getElementById("num-pages").placeholder = "Pages";
}
// window.addEventListener("click", function (event) {
//   if (event.target == addPopup) {
//     addPopup.classList.remove("show");
//   }
// })