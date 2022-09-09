function fakeNetworkSpeed() {
  return Math.round(Math.random() * 100);
}

const networkSpeed1 = fakeNetworkSpeed();
const networkSpeed2 = fakeNetworkSpeed();

// before here you cant touch you cant call it

let networkResponse1;
let networkResponse2;

function check() {
  if (networkResponse1 && networkResponse2) {
    console.log(networkResponse1, networkResponse2);
  }
}

setTimeout(() => {
  networkResponse1 = 'response 1';
  check();
}, networkSpeed1);

setTimeout(() => {
  networkResponse2 = 'response 2';
  check();
}, networkSpeed2);
