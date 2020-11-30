export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Crazy rich asians',
      author: 'Kevin Kwan',
      shortDesc: 'The Outrageously Funny Debut Novel About Three Super-Rich, Pedigreed Chinese Families And The Gossip...',
      fullDesc: 'The Outrageously Funny Debut Novel About Three Super-Rich, Pedigreed Chinese Families And The Gossip...',
      price: 6.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      id: 2,
      title: 'Crazy rich asians',
      author: 'Kevin Kwan',
      shortDesc: 'This Novel Can Be Interpreted As A Double Narrative, Offreds Tale And The Handmaids Tales. The Night...',
      fullDesc: 'This Novel Can Be Interpreted As A Double Narrative, Offreds Tale And The Handmaids Tales. The Night...',
      price: 15.89,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'}
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 600)
    })
  }
}