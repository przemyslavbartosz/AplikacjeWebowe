var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var datasum = document.querySelector('#sum');
var dataavg = document.querySelector('#avg');
var datamin = document.querySelector('#min');
var datamax = document.querySelector('#max');
function () {
    datasum.addEventListener('input', function () { return one + two + three + four; });
}
