import './book-list-item-more.css';

const BookListItemMore = (props) => {
  return (
    <div className="more">
      <button className="more__close" onClick={props.closeBookMore}>X</button>
      <div className="more__container">
        <div className="more__image">
          <img className="more__image-pic" src={props.book.coverImage} alt={props.book.title} />
        </div>
        <div className="more__about">
          <div className="more__author">{props.book.author}</div>
          <div className="more__title">{props.book.title}</div>
          <div className="more__description">{props.book.fullDesc}</div>
          <div className="more__cost">{`$`}{props.book.price}</div>
        </div>
        
      </div>
      
    </div>
  )
}

export default BookListItemMore;