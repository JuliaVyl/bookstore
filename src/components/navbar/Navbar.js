import './navbar.css';
import searchIcon from '../../assets/img/icons/search-ico.png';
import cartIcon from '../../assets/img/icons/shop-bag-ico.png';
import Cart from '../shopping-cart/Cart';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchPannel from '../search-pannel/SearchPannel';
import { loadCartFromStorage } from '../../actions/actions';

const Navbar = () => {
  
  const [showCart, setCart] = useState(false);
  const [showSearch, setSearch] = useState(false);

  const cart = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart)
      dispatch(loadCartFromStorage(JSON.parse(cart)));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const fullCart = cart.length ? true : false;

  return (
    <nav className="navbar">
      <div className="navbar__logo">Bookstore</div>
      <div className="navbar__items">
        <a href="#home" className="navbar__link navbar__link_active home">home</a>
        <a href="#books" className="navbar__link">books</a>
        <a href="#about" className="navbar__link">about us</a>
      </div>
      <div className="navbar__icons">
        <div className="navbar__search-icon">
          <img className="navbar__search-icon-pic" src={searchIcon} alt="Search" onClick={() => setSearch(true)}></img>
        </div>
        <div className="navbar__cart-icon">
          {fullCart && <img className="navbar__cart-icon-pic-full" src={cartIcon} alt="Cart" onClick={() => setCart(true)}></img>}
          {!fullCart && <img className="navbar__cart-icon-pic" src={cartIcon} alt="Cart" onClick={() => setCart(true)}></img>}
        </div>
      </div>
      {showCart && <Cart closeCart={() => setCart(false)} />}
      {showSearch && <SearchPannel closeSearchPannel={() => setSearch(false)}/>}
    </nav>
  )
}


export default Navbar;