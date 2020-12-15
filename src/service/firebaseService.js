import firebase from 'firebase/app';
import 'firebase/firestore';

export default class FirebaseService {

  db = firebase.firestore();

  async getBooks() {
    try {
      const snapshot = await this.db.collection('books').get();
      if (snapshot.empty) {
        return [];
      } 
      const books = [];
      snapshot.forEach(d => {
        books.push({
          id: d.id,
          ...d.data()
        })
      })
      return books;
    }
    catch (e) {
      throw new Error('api error');
    }
  }

  async makeOrder() {
    return {
      status: "success",
      orderId: Math.floor(Math.random() * 8999) + 1000
    }
  }
}