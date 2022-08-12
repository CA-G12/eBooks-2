const searchBox = document.getElementById('search');
const matchList = document.getElementById('match-values');

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
