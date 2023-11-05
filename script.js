// Sample book data (replace with your data)
const books = [
    { title: 'Book 1', author: 'Author 1', genre: 'Genre 1', availability: true },
    { title: 'Book 2', author: 'Author 2', genre: 'Genre 2', availability: false },
    { title: 'Book 1', author: 'Author 1', genre: 'Genre 1', availability: true },
    { title: 'Book 2', author: 'Author 2', genre: 'Genre 2', availability: false },
    { title: 'Book 1', author: 'Author 1', genre: 'Genre 1', availability: true },
    { title: 'Book 2', author: 'Author 2', genre: 'Genre 2', availability: false },
    // Add more books as needed
];

// Display book list on the left side
const bookListUl = document.getElementById('book-list-ul');
books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author}`;
    bookListUl.appendChild(li);
});

// Add new book functionality
const addBookForm = document.getElementById('add-book-form');
addBookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const availability = document.getElementById('availability').checked;

    // Add the new book to the list (this is just a sample, you'd need to update your data model)
    const newBook = { title, author, genre, availability };
    books.push(newBook);

    // Update the displayed book list
    const li = document.createElement('li');
    li.textContent = `${newBook.title} by ${newBook.author}`;
    bookListUl.appendChild(li);

    // Clear the form fields
    addBookForm.reset();
});

// Search functionality on the right side
const searchInput = document.getElementById('search-bar');
const searchResultsUl = document.getElementById('search-results');

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    // Clear previous search results
    searchResultsUl.innerHTML = '';

    // Filter books based on search term
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm)
    );

    // Display search results
    filteredBooks.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        searchResultsUl.appendChild(li);
    });
});

