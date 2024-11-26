library = {
    books: [
        { title: "To Kill a Monster inside", author: "Harper", year: 2007 },
        { title: "1984", author: "George", year: 2000 },
        { title: "The Great Gatsby", author: "Scott", year: 2005 },
        { title: "Pirates Of the Caribian", author: "Jane Austen", year: 1995 }
    ]
};
//-------------------------------------------//
(function () {
    library.books.forEach(book => {
        document.write("<h2>" + book.title + "</h2>");
    });
})();