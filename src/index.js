import React from "react";
import ReactDOM from "react-dom";
//CSS
import "./index.css";
const books = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/715KxZLSFBL._AC_UY218_.jpg",
    title: "Brain Games for Clever Games, 1",
    author: "Gareth Moore",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/715KxZLSFBL._AC_UY218_.jpg",
    title: "Brain Games for Clever Games, 1",
    author: "Gareth Moore",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/715KxZLSFBL._AC_UY218_.jpg",
    title: "Brain Games for Clever Games, 1",
    author: "Gareth Moore",
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/715KxZLSFBL._AC_UY218_.jpg",
    title: "Brain Games for Clever Games, 1",
    author: "Gareth Moore",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {/* using key and props  */}

      {/* {books.map((book, index) => {
        return <Book book={book} key={index} />;
      })} */}
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = ({ image, title, author }) => {
  // const { image, title, author } = props;
  // console.log(props);

  return (
    <article className="book">
      <img src={image} alt="book" />
      <h1>{title}</h1>

      <h2>{author}</h2>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
