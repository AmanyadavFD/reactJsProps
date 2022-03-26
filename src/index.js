import React from "react";
import ReactDOM from "react-dom";
//CSS
import "./index.css";
const books = [
  {
    image: "https://m.media-amazon.com/images/I/715KxZLSFBL._AC_UY218_.jpg",
    title: "Brain Games for Clever Games, 1",
    author: "Gareth Moore",
  },
  {
    image: "https://m.media-amazon.com/images/I/715KxZLSFBL._AC_UY218_.jpg",
    title: "Brain Games for Clever Games, 1",
    author: "Gareth Moore",
  },
  {
    image: "https://m.media-amazon.com/images/I/715KxZLSFBL._AC_UY218_.jpg",
    title: "Brain Games for Clever Games, 1",
    author: "Gareth Moore",
  },
  {
    image: "https://m.media-amazon.com/images/I/715KxZLSFBL._AC_UY218_.jpg",
    title: "Brain Games for Clever Games, 1",
    author: "Gareth Moore",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { image, title, author } = props.book;
  return (
    <article className="book">
      <img src={image} alt="book" />
      <h1>{title}</h1>

      <h2>{author}</h2>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
