const myLibrary = [];
const docLibrary = document.querySelector(".library");
const addBtn = document.querySelector("#addBookBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const form = document.querySelector("#bookForm");
const formModal = document.querySelector(".modal");


function Book(name, author, length) {
	this.id = crypto.randomUUID();
	this.name = name;
	this.author = author;
	this.length = length;
};

// Function to add books to library log
// TODO:
// 1. create document elements for name, author, length
// 	from form in page
// 2. figure out how to link form submission to event listener
//	to fill out values for input below and call addBookToLibrary
function addBookToLibrary(name, author, length) {
	const newBook = new Book(name, author, length);

	myLibrary.push(newBook);

	return newBook;
}


// Function: Display all books in library
function displayBooks() {
	docLibrary.innerText = "My Books";

	for (let i = 0; i < myLibrary.length; i++) {
		const book = myLibrary[i];

		const bookCard = document.createElement("div");
		bookCard.classList.add("bookCard");

		const checkbox = document.createElement("input");
		checkbox.type = 'checkbox';
		checkbox.class = 'checkbox';
		checkbox.name = 'myCheckbox';

		const label = document.createElement('label');
		label.htmlFor = 'myCheckbox';
		label.appendChild(document.createTextNode("Read?"));
		label.appendChild(checkbox);

		bookCard.textContent = `${book.name} by ${book.author} (${book.length} pages)`
		bookCard.appendChild(label);
		// bookCard.appendChild(checkbox);
		docLibrary.appendChild(bookCard);
	}
}

addBtn.addEventListener("click", () => {
	formModal.setAttribute("aria-hidden", "false");
});

cancelBtn.addEventListener("click", ()=> {
	formModal.setAttribute("aria-hidden", "true");
});

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const data = new FormData(event.target);

	const entries = Object.fromEntries(data.entries());

	addBtn.focus();

	// console.log(data.get('title'));
	addBookToLibrary(data.get('title'), data.get('author'), data.get('pages'));
	event.target.reset();

	formModal.setAttribute("aria-hidden", "true");
	displayBooks();
});


const book1 = addBookToLibrary("The Way of Kings", "Brandon Sanderson", 1100);
const book2 = addBookToLibrary("The Sorcerer's Stone", "JK Rowling", 300);
displayBooks();

