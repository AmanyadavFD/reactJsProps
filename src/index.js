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
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = ({ image, title, author }) => {
  // attribute , event handler
  const clickHandler = () => {
    alert("hello world");
  };
  const complexExample = () => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={image} alt="book" />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h2>{author}</h2>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
