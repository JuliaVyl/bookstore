import './cart-item.css';
import pic from '../../assets/img/book-1.jpg';

const CartItem = ({author, title, cost, amount}) => {
  return (
      <div className="cart__book">
        <div className="cart__book_left-side">
          <img className="cart__book-pic" src={pic} alt={title}/>
          <div className="cart__book-about">
            <div className="cart__book-title">{title}</div>
            <div className="cart__book-author">{author}</div>
          </div>
        </div>
        <div className="cart__book_right-side">
          <div className="cart__book-info">
            <button className="cart__info-minus">-</button>
            <div className="cart__info-amount">{amount}</div>
            <button className="cart__info-add">+</button>
            <div className="cart__info-cost">${cost}</div>
          </div>
        </div>
      </div>
  )
}

export default CartItem;