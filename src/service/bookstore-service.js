export default class BookstoreService {

  async getBooks() {
    let resp = await fetch('http://localhost:5000/books');
    let books = await resp.json();

    return books;
  }
}