

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
async function fetchBooks() {
  try {
    const response = await fetch('https://anapioficeandfire.com/api/books');
    const data = await response.json();
    renderBooks(data);
    return response; 
    } catch (error) {
    console.error('Error fetching books:', error);
  }
}
chai.spy.on( window, 'renderBooks' );

// Simulate the fetchBooks() function being called
await fetchBooks();




  // Ensure that renderBooks() was called
  expect(window.renderBooks).to.have.been.called();
afterEach(() => {
  chai.spy.restore(window);
});
it("renders book titles into the DOM by passing a JSON object to renderBooks()", async () => {
  chai.spy.on(window, 'renderBooks');

})
