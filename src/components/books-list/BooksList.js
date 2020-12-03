import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../actions/actions';

import { apiContext } from '../../index.js';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import Spinner from '../spinner/Spinner';
import BookListItem from '../books-list-item/BookListItem';

import './books-list.css';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const error = useSelector(state => state.error);
  const loading = useSelector(state => state.loading);
  const api = useContext(apiContext);

  useEffect(() => {
    dispatch(fetchBooks(api));
  }, [dispatch, api]); 

  if (!books.length) {
    return <p className="books-list__no-books">No books found...</p>
  }
  const data = error !== null ?
    loading ? 
      <Spinner /> :  
      books.map((book) => <BookListItem book={book} key={book.id} />) 
    : <ErrorIndicator />

  return (
    <div className="books-list">
      {data}
    </div>
    
  )
}
export default BooksList;