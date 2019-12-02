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
    report.passWalk = passWalk;

    showInfo(compromised, report);
}

function analyzeInput(input){
    if (input !== "") {
        let hash = SHA1(input).toUpperCase();
        console.log(hash);
        getHIBPResponse(hash, input);
    }
}

var test;

document.addEventListener('click', function (event) {
    if ((event.target.tagName == 'input' ||
        event.target.tagName == 'INPUT') &&
        event.target.getAttribute('type') == 'password') {
            // Show tool after user stops typing for 500ms
            let timeout = null;
            event.target.onkeyup = function (e) {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    console.log('now')
                    analyzeInput(event.target.value)
                }, 500);
            };
    }
}, false);