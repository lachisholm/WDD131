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
    }
];

// grab the container where articles should go
const container = document.querySelector('.articles');

//For each book object, create and append an <article>;
books.forEach(book => {
    const articleEl = document.createElement('article');
    articleEl.classList.add(''); //add any needed classes, or leave blank)


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

  container.appendChild(articleE1);
});