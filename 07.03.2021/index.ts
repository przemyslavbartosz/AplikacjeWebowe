const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');

const datasum = document.querySelector('#sum');
const dataavg = document.querySelector('#avg');
const datamin = document.querySelector('#min');
const datamax = document.querySelector('#max');

function() {
  datasum.addEventListener('input', () => one + two + three + four);
}