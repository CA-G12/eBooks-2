const searchBox = document.querySelector('#search');
const matchList = document.querySelector('#match-values');
const booksContainer = document.querySelector('.books');

const createElemnt = (element, className, parent, text) => {
  const newElement = document.createElement(element);
  newElement.className = className;
  newElement.textContent = text;
  parent.appendChild(newElement);
  return newElement;
};

const createBookCard = (data) => {
  const f = { data };
  console.log(f.data.items[0].volumeInfo.imageLinks.smallThumbnail);
  console.log(f.data.items[0].volumeInfo.title);
  console.log(f.data.items[0].volumeInfo.previewLink);
  console.log({ ...f.data.items[0].volumeInfo.authors });
  console.log(f.data.items[0].searchInfo.textSnippet);
  const oneBook = createElemnt('div', 'one-book', booksContainer, '');
  const imgDiv = createElemnt('div', 'img', oneBook, '');
  const bookImg = createElemnt('img', '', imgDiv, '');
  bookImg.src = 'http://books.google.com/books/content?id=nO9ZAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api';
  const detailsDiv = createElemnt('div', 'details', oneBook, '');
  // eslint-disable-next-line no-unused-vars
  const bookName = createElemnt('h3', '', detailsDiv, 'Node.js Book');
  // eslint-disable-next-line no-unused-vars
  const bookAutherName = createElemnt('p', '', detailsDiv, 'Colin J. Ihrig');
  // eslint-disable-next-line no-unused-vars
  const bookDescription = createElemnt('p', '', detailsDiv, 'Updated for Angular 2, Angular 4, and subsequent versions, this');
  // eslint-disable-next-line no-unused-vars
  const seeMoreBtn = createElemnt('button', '', detailsDiv, 'See more');
};

// Cleaning chlidren of a section and get it empty
const clearingSection = (section) => {
  while (section.firstElementChild) {
    section.firstChild.remove();
  }
};

const getbook = (name) => {
  const bookName = name.replace(/ /g, '+');
  const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:"${bookName}"&printType=books`;
  console.log(url);
  fetch(url, createBookCard);
};

const handlingDOMvaluesMenu = (matchedValues, listSection) => {
  // clear menu
  clearingSection(listSection);
  // displaying values in html
  matchedValues.slice(0, 10).forEach((element) => {
    const valueDiv = createElemnt('div', 'value', listSection, element);
    valueDiv.addEventListener('click', () => { getbook(element); });
  });
};
// ? get the books that contains the value of the input from books.json file
const getMatchedValues = (arrayOfBooks) => {
  const searchTerm = searchBox.value;
  if (searchTerm) {
    // eslint-disable-next-line max-len
    const matchedValues = arrayOfBooks.filter((el) => el.toLowerCase().includes((searchTerm).toLowerCase()));
    handlingDOMvaluesMenu(matchedValues, matchList);
  } else {
    // delete menu
    clearingSection(matchList);
  }
};
searchBox.addEventListener('input', () => fetch('/books', getMatchedValues));

/* imgSrc */

/*
createBookCard();
*/