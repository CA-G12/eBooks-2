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

// Cleaning chlidren of a section and get it empty
const clearingSection = (section) => {
  while (section.firstElementChild) {
    section.firstChild.remove();
  }
};

const createBookCard = (thumbnail, title, authers, textSnippet, previewLink) => {
  const oneBook = createElemnt('div', 'one-book', booksContainer, '');
  const imgDiv = createElemnt('div', 'img', oneBook, '');
  const bookImg = createElemnt('img', '', imgDiv, '');
  bookImg.src = thumbnail;
  const detailsDiv = createElemnt('div', 'details', oneBook, '');
  // eslint-disable-next-line no-unused-vars
  const bookName = createElemnt('h3', '', detailsDiv, title);
  // eslint-disable-next-line no-unused-vars
  const bookAutherName = createElemnt('p', '', detailsDiv, authers);
  // eslint-disable-next-line no-unused-vars
  const bookDescription = createElemnt('p', '', detailsDiv, textSnippet);
  // eslint-disable-next-line no-unused-vars
  const seeMoreBtn = createElemnt('button', '', detailsDiv, 'See more');
  seeMoreBtn.addEventListener('click', () => {
    window.open(previewLink);
  });
};

const fetchBookData = (data) => {
  const results = { data };
  const booksData = results.data.items;
  searchBox.value = '';
  clearingSection(matchList);
  clearingSection(booksContainer);
  clearingSection(searchBox);

  booksData.forEach((book) => {
    const isThumbnail = Object.hasOwn(book.volumeInfo, 'imageLinks');
    const thumbnail = (isThumbnail) ? book.volumeInfo.imageLinks.smallThumbnail : 'https://books.google.ps/googlebooks/images/no_cover_thumb.gif';
    const { title } = book.volumeInfo;
    let authers = book.volumeInfo.authors;
    authers = authers.join(', ');
    // eslint-disable-next-line prefer-destructuring
    const previewLink = book.volumeInfo.previewLink;
    const { textSnippet } = book.searchInfo;
    createBookCard(thumbnail, title, authers, textSnippet, previewLink);
  });
};

const getbook = (name) => {
  const bookName = name.replace(/ /g, '+');
  const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:"${bookName}"&printType=books`;
  fetch(url, fetchBookData);
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
