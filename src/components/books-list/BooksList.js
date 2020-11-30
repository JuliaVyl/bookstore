import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../actions/actions';
import BookListItem from '../books-list-item/BookListItem';
import './books-list.css';
import { apiContext } from '../../index.js';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const api = useContext(apiContext);

  useEffect(() => {
    dispatch(fetchBooks(api));
  }, [dispatch, api]); 

  if (!books.length) {
    return <p>No books...</p>
  }
  
  return (
    <div className="books-list">
      { books.map((book) => <BookListItem book={book} key={book.id} />) }
    </div>
    
  )
}
export default BooksList;