import './navbar.css';
import searchIcon from '../../assets/img/icons/search-ico.png';
import cartIcon from '../../assets/img/icons/shop-bag-ico.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__logo">Bookstore</div>
    <div className="navbar__items">
      <a href="#!" className="navbar__link navbar__link_active">home</a>
      <a href="#!" className="navbar__link">books</a>
      <a href="#!" className="navbar__link">about us</a>
    </div>
    <div className="navbar__icons">
      <div className="navbar__search-icon">
        <a href="#!"><img className="navbar__search-icon-pic" src={searchIcon} alt="Search"></img></a>
      </div>
      <div className="navbar__cart-icon">
        <a href="#!"><img className="navbar__cart-icon-pic" src={cartIcon} alt="Cart"></img></a>
      </div>
    </div>
  </nav>
)

export default Navbar;