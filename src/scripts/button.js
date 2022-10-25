'use strict'

let voteValue = localStorage.getItem('voteValue');

const ele = document.createElement("div");
ele.appendChild(document.createTextNode(`You selected ${voteValue} out of 5`));


