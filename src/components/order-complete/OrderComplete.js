import './order-complete.css';
import success from '../../assets/img/icons/sucsess-order.gif';

const OrderComplete = (props) => {
  return (
    <div className="order-complete">
      <img className="order-complete__icon" src={success} alt="done-icon"></img>
      <div className="order-complete__text">{`Your order #${props.data} is complete`}</div>
    </div>
  )
}

export default OrderComplete;