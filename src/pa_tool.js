'use strict'

async function getHIBPResponse(input) {
    let index = 5;
    let prefix = input.substring(0, index);
    let suffix = input.substring(index, input.length);
    let url = 'https://api.pwnedpasswords.com/range/';

    try {
        let res = await fetch(url+prefix);
        res = await res.text();
        //console.log(res);
        isPwned(res, suffix);
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

function isPwned(res, input) {
    let list = formatResponse(res);
    let ans = false;
    if (list[input]){
        ans = true;
    }
    console.log(ans);
}

function analyzeInput(input){
    // let input = process.argv.slice(2);
    // input = input.join(' ');
    let report = analyze(input);
    let passWalk = getPassWalk(input);
    
    if (input !== "") {
        console.log('TODO: remove when done, password is '+input);
        let hash = SHA1(input).toUpperCase();
        console.log(hash);
        getHIBPResponse(hash);
    }

    showInfo(report, passWalk);
}

let passInput = document.getElementsByTagName('input');
for (let i = 0; i < passInput.length; i++){
    let input = passInput[i];
    if (input.getAttribute('type') === 'password'){
        input.onblur = function(){
            analyzeInput(input.value);
        }

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