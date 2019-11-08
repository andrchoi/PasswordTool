'use strict'

async function getHIBPResponse(input) {
    let index = 5;
    let prefix = input.substring(0, index);
    let suffix = input.substring(index, input.length-1);
    let url = 'https://api.pwnedpasswords.com/range/';

    try {
        let res = await fetch(url+prefix);
        console.log(res);
        isPwned(res, suffix);
    } catch(err) {
        console.log(err);
    }

}

function isPwned(list, input) {
    list.forEach(element => {
        if (input === element) {
            return true;
        }
    });
    return false;
}

function analyzeInput(input){
    // let input = process.argv.slice(2);
    // input = input.join(' ');
    
    if (input === "") {
        console.log('Error: no input detected. \nUsage: pa_tool.js your_input_here');
    } else {
        console.log('Your password is '+input);
        let hash = SHA1(input)
        console.log(hash)
        console.log(getHIBPResponse(hash));
    }
}

analyzeInput('test')