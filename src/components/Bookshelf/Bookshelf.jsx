console.log("Bookshelf component is rendering");

import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: '', author: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setBooks((prevBooks) => [...prevBooks, newBook]);

        setNewBook({ title: '', author: '' });
    };


    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <div className="formRow">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="formRow">
                        <label>Author</label>
                        <input
                            type="text"
                            name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
            {books.map((book, index) => (
            <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
