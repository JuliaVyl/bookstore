import './home.css'
import bg from '../../assets/img/banner.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { filterBooksByCategory } from '../../actions/actions';

const Home = () => {
  const bestsellers = useSelector(state => state.books.filterByCategory);
  const dispatch = useDispatch();

  return (
    <div className="home" id="home">
      <div className="home__wrapper">
        <img className="home__bg" src={bg} alt="home-page-photo"></img>
        <div className="home__logo">Bookstore</div>
        <a href="#about" className="home__first-promo">
          <div className="home__first-promo-text promo-text">Charity your old books</div>
        </a>
        <a href="#books" className="home__second-promo" onClick={() => dispatch(filterBooksByCategory('Bestsellers'))} >
          <div className="home__second-promo-text promo-text">top books 2020</div>
        </a>
      </div>
  </div>
  )
}
  
  



export default Home;