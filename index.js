// Code your solutions in this file
function writeCards(nameArr, adjective) {
    const newArr = [];
    for (let name of nameArr) {
        newArr.push(`Thank you, ${name}, for the wonderful ${adjective} gift!`)
    }
    return newArr;
}
function countDown(number) {
    for(let i = number; i >= 0; i--) {
        console.log(number)
        number --;
    }
}