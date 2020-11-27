import img1 from '../../assets/img/book-1.jpg';
import './books-list.css';

const BooksList = () => {
  return (
    <div className="books-list">
      <div className="books-list__book-card">
        <div className="book-card__image">
          <img className="book-card__image-pic" src={img1}></img>
        </div>
        <div className="book-card__about">
          <div className="about__author">Kevin Kwan</div>
          <div className="about__title">Crazy rich asians</div>
          <div className="about__description">the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...</div>
          <div className="about__cost">$4.99</div>
          <button className="about__buy-btn">buy now</button>
        </div>
      </div>
      <div className="books-list__book-card">
        <div className="book-card__image">
          <img className="book-card__image-pic" src={img1}></img>
        </div>
        <div className="book-card__about">
          <div className="about__author">Kevin Kwan</div>
          <div className="about__title">Crazy rich asians</div>
          <div className="about__description">This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...</div>
          <div className="about__cost">$4.99</div>
          <button className="about__buy-btn">buy now</button>
        </div>
      </div>
      <div className="books-list__book-card">
        <div className="book-card__image">
          <img className="book-card__image-pic" src={img1}></img>
        </div>
        <div className="book-card__about">
          <div className="about__author">Kevin Kwan</div>
          <div className="about__title">Crazy rich asians</div>
          <div className="about__description">This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...</div>
          <div className="about__cost">$4.99</div>
          <button className="about__buy-btn">buy now</button>
        </div>
      </div>
      <div className="books-list__book-card">
        <div className="book-card__image">
          <img className="book-card__image-pic" src={img1}></img>
        </div>
        <div className="book-card__about">
          <div className="about__author">Kevin Kwan</div>
          <div className="about__title">Crazy rich asians</div>
          <div className="about__description">the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...</div>
          <div className="about__cost">$4.99</div>
          <button className="about__buy-btn">buy now</button>
        </div>
      </div>
    </div>
  )
}

export default BooksList;