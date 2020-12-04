import './cart.css';
import { connect } from 'react-redux';
import pic from '../../assets/img/book-1.jpg';
const Cart = ({items, total, subtract, add}) => {

  return (
    <div className="cart">
      <div className="cart__body">
        <div className="cart__header">
          <div className="cart__title">Order</div>
        <a className="cart__close" href="#!">x</a>
        </div>
        {/* <p className="cart__empty">Your cart is empty</p> */}

        <div className="cart__books">
          {items.map((book) =>  {
            return (
              <div className="cart__book" key={book.id}>
                <div className="cart__book_left-side">
                  <img className="cart__book-pic" src={pic} alt={book.title}/>
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
                    <div className="cart__info-cost">${book.cost}</div>
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
      </div>
    </div>
  )
}
const mapStateToProps = ({cart: { cartItems, totalSum }}) => {
  return {
    items: cartItems,
    total: totalSum
  }
}
const mapDispatchToProps = () => {
  return {
    subtract: (id) => {
      console.log(`Subrtact ${id}`)
    },
    add: (id) => {
      console.log(`Add ${id}`)
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
