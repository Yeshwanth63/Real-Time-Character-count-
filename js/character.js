let count1 = 0;
let count2 = 50;

function countadd() {
    count2 = count2 - 1;
    document.querySelector('#value2').innerText = count2;
    //console.log(count2);
    if (count2 === 0) {
        document.getElementById("ok").removeEventListener("keypress", keyHandle);
    }
}
function countsub() {
    count1 = count1 + 1;
    document.querySelector('#value1').innerText = count1;
   // console.log(count1);
}

var suppressEvent = false

function keyHandle(e){
countadd();
countsub()
}
//final display of counting the characters

document.getElementById('ok').addEventListener('keypress', keyHandle);