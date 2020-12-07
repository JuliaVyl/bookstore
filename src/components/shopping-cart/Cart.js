import './cart.css';
import { connect } from 'react-redux';
import { bookAddedToCart, bookDeletedFromCart } from '../../actions/actions';

const Cart = ({items, subtract, add, closeCart, fullCart}) => {
  let total = 0;
  for (let item of items)
    total = (item.amount * item.price + parseFloat(total)).toFixed(2);
  return (
    <div className="cart">
      <div className="cart__body">
        <div className="cart__header">
          <div className="cart__title">Order</div>
        <p className="cart__close" onClick={closeCart}>x</p>
        </div>
        { total === 0 && <p className="cart__empty">Your cart is empty</p> }
        {total > 0 && 
        <>
          <div className="cart__books">
            {items.map((book) =>  {
              return (
                <div className="cart__book" key={book.id}>
                  <div className="cart__book_left-side">
                    <img className="cart__book-pic" src={book.coverImage} alt={book.title}/>
                    <div className="cart__book-about">
                      <div className="cart__book-title">{book.title}</div>
                      <div className="cart__book-author">{book.author}</div>
                    </div>
                  </div>
                  <div className="cart__book_right-side">
                    <div className="cart__book-info">
                      <button className="cart__info-minus" onClick={() => subtract(book.id)}>-</button>
                      <div className="cart__info-amount">{book.amount}</div>
                      <button className="cart__info-add" onClick={() => add(book.id)}>+</button>
                      <div className="cart__info-cost">${(book.price*book.amount).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              ) 
            }) }
          </div>
          <div className="cart__total-sum">Total: ${total}</div>
          <div className="cart__order">
            <p className="cart__order-text">To place your order submit this form:</p>
            <div className="cart__order-form">
              <input className="cart__order-email" type="email" placeholder="Enter your email" required></input>
              <button className="cart__order-buy">Buy</button>
            </div>
          </div>
        </>
        }

      </div>
    </div>
  )
}
const mapStateToProps = ({cart: { cartItems, totalSum }}) => {
  return {
    items: cartItems
  }
}
const mapDispatchToProps = {
  subtract: bookDeletedFromCart,
  add: bookAddedToCart

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
