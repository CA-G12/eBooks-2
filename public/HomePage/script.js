const searchBox = document.querySelector('#search');
const matchList = document.querySelector('#match-values');
const booksContainer = document.querySelector('.books');

// Cleaning chlidren of a section and get it empty
const clearingSection = (section) => {
  while (section.firstElementChild) {
    section.firstChild.remove();
  }
};
const handlingDOMvaluesMenu = (matchedValues, listSection) => {
  // clear menu
  clearingSection(listSection);
  // displaying values in html
  matchedValues.slice(0, 10).forEach((element) => {
    const valueDiv = document.createElement('div');
    valueDiv.className = 'value';
    valueDiv.textContent = element;
    listSection.appendChild(valueDiv);
    valueDiv.addEventListener('click', () => console.log(`i clicked on ${element}`));
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

const createElemnt = (element, className, parent, text) => {
  const newElement = document.createElement(element);
  newElement.className = className;
  newElement.textContent = text;
  parent.appendChild(newElement);
  return newElement;
};
/* imgSrc */
const createBookCard = () => {
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

createBookCard();
