
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiContext } from '../..';
import { bookAddedToCart, bookDeletedFromCart, cleanOrderData, fetchOrder } from '../../actions/actions';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import OrderComplete from '../order-complete/OrderComplete';
import Spinner from '../spinner/Spinner';

import './cart.css';

const Cart = ({closeCart}) => {
  const items = useSelector(state => state.cart.cartItems);
  let orderData = useSelector(state => state.checkout.data);
  const loading = useSelector(state => state.checkout.loading);
  const error = useSelector(state => state.checkout.error);
  const dispatch = useDispatch();
  const api = useContext(apiContext);

  const [value, setValue] = useState('');

  let total = 0;
  for (let item of items)
    total = (item.amount * item.price + parseFloat(total)).toFixed(2);

  const makeOrder = (e) => {
    e.preventDefault();
    dispatch(fetchOrder(api));
    setValue('');
  }
  useEffect(()=>{
    return () => dispatch(cleanOrderData());
  }, [dispatch])
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  }

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
                        <button className="cart__info-minus" onClick={() => dispatch(bookDeletedFromCart(book.id))}>-</button>
                        <div className="cart__info-amount">{book.amount}</div>
                        <button className="cart__info-add" onClick={() => dispatch(bookAddedToCart(book.id))}>+</button>
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
              <form className="cart__order-form" onSubmit={makeOrder}>
                <input 
                  className="cart__order-email" 
                  type="email" 
                  placeholder="Enter your email" 
                  value={value}
                  onChange={handleChange} 
                  required></input>
                <button type="submit" className="cart__order-buy">Buy</button>
              </form>
              {loading && <Spinner />}
              {error!==null && <ErrorIndicator />}
              
              
            </div>
          </>
          }
          {orderData.status==='success' && <OrderComplete data={orderData.orderId} />}
        </div>
      </div>

  )
}

export default Cart;
