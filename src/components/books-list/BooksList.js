import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, bookAddedToCart } from '../../actions/actions';

import { apiContext } from '../../index.js';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import Spinner from '../spinner/Spinner';
import BookListItem from '../books-list-item/BookListItem';

import './books-list.css';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const api = useContext(apiContext);

  useEffect(() => {
    dispatch(fetchBooks(api));
  }, [dispatch, api]); 

  return (
    <div className="books-list">
      { books.loading && <Spinner/> }
      { books.error && <ErrorIndicator/> }
      { books.books.map((book) => {
        return (
          <BookListItem 
            onAddedToCart={() => dispatch(bookAddedToCart(book.id))} 
            book={book} 
            key={book.id} />
        )
        
      }) }
    </div>
    
  )
}
export default BooksList;