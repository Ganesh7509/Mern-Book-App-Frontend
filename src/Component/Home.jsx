import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [form, setForm] = useState({
    bookName: "",
    bookTitle: "",
    author: "",
    price: "",
    publishDate: "",
  });

  const [books, setBooks] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch All Books
  const fetchBooks = async () => {
    const res = await axios.get(
      "https://mern-book-app-backend-3usw.onrender.com/books"
    );
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add / Update Book
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(
        `https://mern-book-app-backend-3usw.onrender.com/update/${editId}`,
        form
      );
      setEditId(null);
    } else {
      await axios.post(
        "https://mern-book-app-backend-3usw.onrender.com/add-book",
        form
      );
    }

    setForm({
      bookName: "",
      bookTitle: "",
      author: "",
      price: "",
      publishDate: "",
    });

    fetchBooks();
  };

  // Delete
  const deleteBook = async (id) => {
    await axios.delete(
      `https://mern-book-app-backend-3usw.onrender.com/delete/${id}`
    );
    fetchBooks();
  };

  // Edit
  const editBook = (book) => {
    setEditId(book._id);
    setForm({
      bookName: book.bookName,
      bookTitle: book.bookTitle,
      author: book.author,
      price: book.price,
      publishDate: book.publishDate,
    });
  };

  return (
    <div className="container">
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="input-group">
            <label>Book Name</label>
            <input
              name="bookName"
              value={form.bookName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Book Title</label>
            <input
              name="bookTitle"
              value={form.bookTitle}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Author</label>
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Selling Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Publish Date</label>
            <input
              type="date"
              name="publishDate"
              value={form.publishDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="submit-wrapper">
          <button className="submit-btn">
            {editId ? "Update Book" : "Add Book"}
          </button>
        </div>
      </form>

      {/* TABLE */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Publish Date</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.bookName}</td>
                <td>{book.bookTitle}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.publishDate}</td>
                <td>{new Date(book.createdAt).toLocaleDateString()}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteBook(book._id)}
                  >
                    Delete
                  </button>

                  <button
                    className="delete-btn"
                    style={{ background: "#007bff", marginLeft: "10px" }}
                    onClick={() => editBook(book)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
