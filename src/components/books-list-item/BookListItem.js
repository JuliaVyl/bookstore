import { useState } from 'react';
import BookListItemMore from '../books-list-item-more/BookListItemMore';
import './book-list-item.css';

const BookListItem = (props) => {
  const [fullBook, setBook] = useState(false);
  return (
    <>
      <div className="books-list__book-card">
        <div className="book-card__image">
          <img className="book-card__image-pic" src={props.book.coverImage} alt={props.book.title} />
        </div>
        <div className="book-card__about">
          <div 
            className="book-card__about-info" 
            helper="Click here to learn more abouit it"
            onClick={() => setBook(true)}>
            <div className="about__author">{props.book.author}</div>
            <div className="about__title">{props.book.title}</div>
            <div className="about__description">{props.book.shortDesc}</div>
            <div className="about__cost">{`$`}{props.book.price}</div>
          </div>
          <button className="about__buy-btn" onClick={props.onAddedToCart}>add to cart</button>
        </div>
      </div>
      {fullBook && <BookListItemMore book={props.book} closeBookMore={() => setBook(false)} />}
    </>
  )
}

export default BookListItem;
