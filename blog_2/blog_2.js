// book.js
//contains data for two books to be used in the blog layout later

const books = [
    {
        title: "The Great Gatsy",
        author: "F. Scott Fitzgerald",
        date: "1925",
        image: "images/gatsby.jpg",
        description: " A novel set in the Jazz Age that tells the story of Jay Gatsby's tragic pursuit of wealth and romance. "
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper, Lee",
        date: "1960",
        image: "images/mockingbird.jpg", 
        description: "A story of racial injustice and moral growth in the deep south through the eyes of a young girl"
    },

    {
      title: "Belgariad Book One: Pawn of Prophecy",
      author: "David Eddings",
      date: "Feb 12, 2022",
      image: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
      description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms.  Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf-a father and daughter granted near immotality by one of the Gods set out on a complex mission."
    }
  
];

// grab the container where articles should go
const container = document.querySelector('.articles');

//For each book object, create and append an <article>;
books.forEach(book => {
    const articleEl = document.createElement('article');
  


   articleEl.innerHTML = `
    <div class="article-details">
      <p class="author">By: ${book.author}</p>
      <time class="date" datetime="${book.date}">${book.date}</time>
    </div>
    <div class="article-content">
      <h2>${book.title}</h2>
      <img src="${book.image}" alt="Cover of ${book.title}">
      <p>${book.description}</p>
    </div>
  `;

  container.appendChild(articleEl);
});