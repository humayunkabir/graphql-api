/*======================================
| Dummy DB
=======================================*/
const books = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    genre: 'Biography',
    published: 'May 23, 2006',
    authorId: '1',
  },
  {
    id: '2',
    title: 'Nineteen Eighty-Four',
    genre: 'Classics',
    published: 'July 1, 1950',
    authorId: '2',
  },
  {
    id: '3',
    title: 'Down and Out in Paris and London',
    genre: 'Nonfiction',
    published: 'March 15, 1972',
    authorId: '2',
  },
  {
    id: '4',
    title: 'Homage to Catalonia',
    genre: 'History',
    published: 'October 22, 1980',
    authorId: '2',
  },
  {
    id: '5',
    title: 'The Lord of the Rings',
    genre: 'Fantasy',
    published: 'October 12, 2005',
    authorId: '3',
  },
];

const authors = [
  {
    id: '1',
    name: 'Harper Lee',
    age: 90,
  },
  {
    id: '2',
    name: 'George Orwell',
    age: 47,
  },
  {
    id: '3',
    name: 'J.R.R. Tolkien',
    age: 81,
  },
];

module.exports = { books, authors };