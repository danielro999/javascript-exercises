const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(books) {
const title = books.map(libro => libro.title)
return title
};


console.log(getTheTitles(books))//['Book','Book2']

// Do not edit below this line
module.exports = getTheTitles;
