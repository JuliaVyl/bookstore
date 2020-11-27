import Categories from '../categories/Categories';
import BooksList from '../books-list/BooksList';

import './books.css';

const Books = () => (
  <div className="books">
    <div className="books__wrapper">
      <Categories/>
      <BooksList />
    </div>
  </div>
)

export default Books;