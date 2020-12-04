import './cart.css';
import CartItem from '../shopping-cart -item/CartItem';

const Cart = () => {
  // if (books.length === 0) return <p className="cart__empty">Your cart is empty</p>
  return (
    <div className="cart">
      <div className="cart__body">
        <div className="cart__header">
          <div className="cart__title">Order</div>
        <a className="cart__close" href="#!">x</a>
        </div>
        {/* <p className="cart__empty">Your cart is empty</p> */}
        <div className="cart__books">
          <CartItem />
        </div>
        <div className="cart__total-sum">Total: ${30}</div>
        <div className="cart__order">
          <p className="cart__order-text">To place your order submit this form:</p>
          <div className="cart__order-form">
            <input className="cart__order-email" type="email" placeholder="Enter your email" required></input>
            <button className="cart__order-buy">Buy</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Cart;