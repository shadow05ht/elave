// let deyer = confirm('Men yaxsiyamsa "OK" bas, pisemse, "Cancel" bas. "Cancel" bassan qisas alacam');

// let num = 0;
// let netice;
// let reqem = 9000000000;

// while (num < 5) {
//     if (deyer) {
//         num++;
//     } else {
//         reqem *= 99999999999999;
//         console.log('Leman');
//     }
// }

// document.getElementById('zor').innerHTML =  'Cox sagolun bu sizin gozelliyinizdir :)';

let deyer = prompt('Yaxşı və pis ifadələrindən birini daxil edin. Düzgün ifadə seçin. Yoxsa kompüterinizi hackliyəcəm.');

let num = 0;
let netice;
let reqem = 999999999999999;

while (num < 5) {
    if (deyer=='Yaxşı') {
        num++;
    } else if(deyer=='pis') {
        reqem *= 99999999999999;
    }
}
document.getElementById('zor').innerHTML =  'Bu sizin gözəlliyinizdir. :)';