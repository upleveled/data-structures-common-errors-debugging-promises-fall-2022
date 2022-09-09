// Promise way
fetch('http://example.com/')
  .then((response) => response.text())
  .then((data) => data)
  .catch((error) => {
    console.log(error);
  });

// Async Await

const response = await fetch('http://example.com/');
const data = await response.text();

// using functions

async function getData(url) {
  const responseInFunction = await fetch(url);
  const dataInFunction = await responseInFunction.text();

  console.log(dataInFunction);
}

await getData('http://example.com/');
