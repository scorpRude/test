'use strict';

const answer = ['IvaN', 'AnN', 'KsEnIa', 'VoldeMaRt'];

let answerMap = answer.map(item => {
    return item.toLowerCase().charAt(0).toUpperCase() + item.slice(1).toLowerCase();
});
console.log(answerMap);