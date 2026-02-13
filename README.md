# Library App

A simple library management application that allows users to track their book collection. Built with vanilla JavaScript as part of The Odin Project curriculum.

## Live Link: https://dominickvaske.github.io/libraryApp/

## Features

- **Add Books**: Click "Add Book" to open a modal form where you can input book details (title, author, pages, read status)
- **Display Library**: View all books in your collection as individual cards
- **Track Reading Status**: Mark books as read/unread with a checkbox on each card
- **Remove Books**: Delete books from your library
- **Persistent Storage**: Books are stored in memory during the session

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## How to Use

1. Open `index.html` in your browser
2. Click the "Add Book" button in the header
3. Fill out the book form with:
   - Title
   - Author
   - Number of pages
   - Read status (read/not read)
4. Click "Save" to add the book to your library, or "Cancel" to close the form
5. View your books displayed as cards in the main library section
6. Toggle the "Read?" checkbox on each card to track reading progress

## Project Structure
```
library-app/
├── index.html      # Main HTML structure
├── styles.css      # Styling and layout
└── app.js          # Core application logic
```

## Key Functions

- `Book(name, author, length)` - Constructor for creating book objects
- `addBookToLibrary(name, author, length)` - Adds a new book to the library array
- `displayBooks()` - Renders all books in the library to the DOM

## Future Enhancements

- Local storage integration for data persistence across sessions
- Edit existing book entries
- Sort/filter books by different criteria
- Reading statistics dashboard

## Learning Objectives

This project demonstrates:
- DOM manipulation
- Event handling
- Form validation and submission
- Object constructors
- Array methods
- Modal/dialog patterns

---

*Built as part of The Odin Project - Foundations Course*
