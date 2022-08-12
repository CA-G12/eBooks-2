const searchBox = document.getElementById('search');
const matchList = document.getElementById('match-values');
// ? fetch data from specific source
const fetch = (url, cb) => {
  console.log(`fetch url: ${url}`);
  if (document.readyState === 'complete') {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          console.log(`fetched data\n${data}`);
          cb(data);
        } else {
          console.error(xhr.responseText);
        }
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  }
};

const clearingSection = (section) => {
  while (section.firstElementChild) {
    section.firstChild.remove();
  }
};
const handlingDOMvaluesMenu = (matchedValues, listSection) => {
// clear menu
  clearingSection(listSection);
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
  console.log('in getMatchedValues func and here is the arrrrraaayyyy of bboks\n', arrayOfBooks);
  if (searchBox.value) {
    // eslint-disable-next-line max-len
    const matchedValues = arrayOfBooks.filter((el) => el.toLowerCase().includes((searchBox.value).toLowerCase()));
    console.log('filtereddddddd aray\n', matchedValues);
    handlingDOMvaluesMenu(matchedValues, matchList);
  } else {
    // delete menu
    clearingSection(matchList);
  }
};
searchBox.addEventListener('input', () => fetch('/books', getMatchedValues));
