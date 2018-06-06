let books = {};

$(document).ready(function () {
        
    $('#modal-add-book-ok').on('click', addToBookshelf);
    
});

let addToBookshelf = () => {
    var formData = $('form').serializeArray();
//    console.log(formData);
    
    let newArr = [];
    for (key in formData) {
        newArr[formData[key]['name']] = formData[key]['value'];
    }
//    console.log(newArr);
    
    
    let randomArticle = Math.round(Math.random() * 1000000);
    
    books[randomArticle] = newArr;
    console.log(books);
    
    $('#modal-add-book').modal('hide');
    drawBook(randomArticle);
    
} // end addToBookshelf();

let drawBook = (article) => {
    let div = document.createElement('div');
    div.className = "col-lg-3 col-md-6 col-sm-12 book";
    div.setAttribute('data', article);
    
    // create a book's cover
    let cover = document.createElement('div');
    cover.className = "book-cover";
    cover.style.backgroundImage = `url(${books[article]['book-cover']})`;
    
    // create a book's title
    let bookName = document.createElement('h4');
    bookName.className = "book-title";
    bookName.innerHTML = books[article]['book-name'];
    
    // create a book's year
    let bookYear = document.createElement('p');
    bookYear.className = "book-year";
    bookYear.innerHTML = books[article]['book-year'];
    
    // append all elements to div
    div.appendChild(cover);
    div.appendChild(bookName);
    div.appendChild(bookYear);
    
    // append all elements to page
    $('.book-panel').append(div);
}