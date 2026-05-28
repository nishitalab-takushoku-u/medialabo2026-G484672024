let b = document.querySelector("button#calc"); 
b.addEventListener('click', greeting);
function greeting() {
    let lInput = document.querySelector('input[name="left"]');
    let rInput = document.querySelector('input[name="right"]');
    let lNum = Number(lInput.value);
    let rNum = Number(rInput.value);
    let sum = lNum + rNum;
    let Answer = document.querySelector("span#answer");
    Answer.textContent = sum;
}