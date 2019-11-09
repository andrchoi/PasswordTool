'use strict'

async function getHIBPResponse(input) {
    let index = 5;
    let prefix = input.substring(0, index);
    let suffix = input.substring(index, input.length);
    let url = 'https://api.pwnedpasswords.com/range/';

    try {
        let res = await fetch(url+prefix);
        res = await res.text();
        console.log(res);
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
    
    if (input === "") {
        console.log('Error: no input detected. \nUsage: pa_tool.js your_input_here');
    } else {
        console.log('Your password is '+input);
        let hash = SHA1(input).toUpperCase();
        console.log(hash);
        getHIBPResponse(hash);
    }
}

analyzeInput('password')