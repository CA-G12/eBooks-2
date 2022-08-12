// eslint-disable-next-line no-unused-vars
const fetch = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        // console.log(`fetched data\n${data}`);
        cb(data);
      } else {
        // console.error(xhr.responseText);
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};
