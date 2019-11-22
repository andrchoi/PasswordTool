'use strict'

async function getHIBPResponse(input, pass) {
    let index = 5;
    let prefix = input.substring(0, index);
    let suffix = input.substring(index, input.length);
    let url = 'https://api.pwnedpasswords.com/range/';

    try {
        let res = await fetch(url+prefix);
        res = await res.text();
        isPwned(res, suffix, pass);
    } catch(err) {
        console.log(err);
    }
}

function formatResponse(res){
    let formatted = {}
    let array = res.split("\r\n");
    array.forEach(entry => {
        let data = entry.split(':');
        formatted[data[0]] = data[1]; 
    });
    return formatted;
}

function isPwned(res, input, pass) {
    let list = formatResponse(res);
    let ans = false;
    if (list[input]){
        ans = true;
    }

    analyzeAndDisplay(ans, pass);
}

function analyzeAndDisplay(compromised, input) {
    const report = analyze(input);
    const passWalk = getPassWalk(input);

    showInfo(compromised, report, passWalk);
}

function analyzeInput(input){
    if (input !== "") {
        console.log('TODO: remove when done, password is '+input);
        let hash = SHA1(input).toUpperCase();
        console.log(hash);
        getHIBPResponse(hash, input);
    }
}

let passInput = document.getElementsByTagName('input');
for (let i = 0; i < passInput.length; i++){
    let input = passInput[i];
    if (input.getAttribute('type') === 'password'){
        // Show tool after user stops typing for 500ms
        let timeout = null;
        input.onkeyup = function (e) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                analyzeInput(input.value)
            }, 500);
        };
    }
}