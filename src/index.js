import React from "react";
import ReactDOM from "react-dom";
//CSS
import "./index.css";
const firtsBook = {
  image: "https://m.media-amazon.com/images/I/715KxZLSFBL._AC_UY218_.jpg",
  title: "Brain Games for Clever Games, 1",
  author: "Gareth Moore",
};
const secondBook = {
  image: "https://m.media-amazon.com/images/I/715KxZLSFBL._AC_UY218_.jpg",
  title: "Brain Games for Clever Games, 1",
  author: "Gareth Moore",
};
// const title = "Brain Games for Clever Games, 1";
// const author = "Gareth Moore";
// const image = "https://m.media-amazon.com/images/I/715KxZLSFBL._AC_UY218_.jpg";
function BookList() {
  return (
    <section className="booklist">
      <Book
        image={firtsBook.image}
        title={firtsBook.title}
        author={firtsBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
          leo eu laoreet ultricies. Phasellus imperdiet risus ac nibh fermentum,
          sed lobortis lectus aliquam.{" "}
        </p>
      </Book>
      <Book
        image={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ image, title, author, children }) => {
  // const { image, title, author } = props;
  // console.log(props);
  return (
    <article className="book">
      <img src={image} alt="book" />
      <h1>{title}</h1>
      {children}
      <h2>{author}</h2>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
