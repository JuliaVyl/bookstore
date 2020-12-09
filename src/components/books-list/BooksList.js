import { useContext, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, bookAddedToCart } from '../../actions/actions';

import { apiContext } from '../../index.js';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import Spinner from '../spinner/Spinner';
import BookListItem from '../books-list-item/BookListItem';

import './books-list.css';

const BooksList = () => {
  const dispatch = useDispatch();
  let books = useSelector(state => state.books.books);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);
  const api = useContext(apiContext);
  const filterText = useSelector(state => state.books.filterText);
  const filterCategory = useSelector(state => state.books.filterCategory);
  
  books = useMemo(() => {
    if (filterText === '') return books;

    return books.filter((book) => {
      return (
        ((book.author.trim().toLowerCase().includes(filterText)) || (book.title.trim().toLowerCase().includes(filterText)))
      )
    }); 
  }, [books, filterText]);

  books = useMemo(() => {
    if (filterCategory === 'All') return books;

    return books.filter((book) => {
      if (filterCategory === 'Bestsellers') {
        return (
          book.bestseller
        )
      }
      return (
        book.category === filterCategory
      )
    }); 
  }, [books, filterCategory])


  useEffect(() => {
    dispatch(fetchBooks(api));
  }, [dispatch, api]); 

  return (
    <div className="books-list">
      { loading && <Spinner/> }
      { error && <ErrorIndicator/> }
      { books.map((book) => {
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