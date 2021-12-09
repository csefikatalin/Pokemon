/* git https://www.youtube.com/watch?v=1bDWQ20ZCLk */
/* https://www.youtube.com/watch?v=6YcB6NMYyFM */
/* https://www.youtube.com/watch?v=BCq41yGOYNY */

function fuggveny1() {
    console.log("Én vagyok az első?  ");
}
function fuggveny2() {
    console.log("Én vagyok az második?  ");
}
function fuggveny3() {
    console.log("Én vagyok az harmadik?  ");
}
/* 
fuggveny1();
fuggveny2();
fuggveny3();
console.log("Én vagyok az negyedik? "); */
/*********************************** */
function fuggveny1() {
    console.log("Én vagyok az első?  ");
}
function fuggveny2() {
    console.log("Én vagyok az második?  ");
}
function fuggveny3() {
    console.log("Én vagyok az harmadik?  ");
}
setTimeout(() => {
    fuggveny1();
}, 6000);
fuggveny2();
setTimeout(() => {
    fuggveny3();
}, 1000);
console.log("Én vagyok az negyedik? ");
