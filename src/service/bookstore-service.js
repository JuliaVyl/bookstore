export default class BookstoreService {

  async getBooks() {
    let resp = await fetch('http://localhost:5000/books');
    let books = await resp.json();

    return books;
  }

  async makeOrder() {
    return {
      status: "success",
      orderId: Math.floor(Math.random() * 8999) + 1000
    }
  }
}