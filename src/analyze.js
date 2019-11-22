'use strict';

// function checkRepeats(input) {
//     let letters = {};
//     for (let i = 0; i < input.length; i++) {
//         let char = input.charAt(i);
//         if (letters[char]) {
            
//         }
//     }
// }

function checkSingleWord(words) {
    //TODO: check against dictionary
    let dict = ['hello', 'world'];
    let ans = [];

    words.forEach(function (word) {
        if (dict.includes(word)) {
            ans.push(word);
        }
    })
    return ans;
}

function getWords(split, report) {
    let result = []
    if (split.length > 1){
        for (let i = 0; i < split.length; i++) {
            let part = split[i];
            if (/^[A-Za-z]+$/.test(part)) {
                result.push(part);
                if (split[i-1] !== '' || (i+1 < split.length && split[i+1] !== '')) {
                    report.simpleCombo = 'Password is word + special character combo';
                }
                console.log(report)
            }
        }
    }
    return result;
}

function analyze(input) {
    let report = {};
    
    let split = input.split(/([A-Za-z]+)/);

    console.log(split);
    let words = getWords(split, report);
    console.log(words)
    if (words.length === 0) {
        report.letters = 'Password has no letters';
    }
    else if (split.length === 3 && split[0] === '' && split[split.length-1] === '') {
        report.letters = 'Password is only letters'
    }

    let validWords = checkSingleWord(words);
    if (validWords.length > 0) {
        let wordAlert = 'Password contains actual words:';
        validWords.forEach(function (w) {
            wordAlert += ' '+ w;
        })
        report.words = wordAlert;
    }
    return report;
}