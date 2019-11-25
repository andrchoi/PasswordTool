'use strict';

function filterPatterns(repeats) {
    for (let pattern in repeats) {
        let cyc = pattern+pattern;
        for (let key in repeats) {
            if (key !== pattern) {
                if (key.split(pattern).length-1 === key.length && repeats[key] <= repeats[pattern]) {
                    delete repeats[key];
                } 
                else if (pattern.length > 1 && cyc.includes(key) && repeats[key] <= repeats[pattern]) {
                    delete repeats[key];
                }
            }
        }
    }
}

function checkRepeats(input) {
    let repeats = {};
    let threshold = 0.4;

    for (let i = 0; i < input.length; i++) {
        for (let size = i+1; size < input.length+1; size++){
            if ((size-i)/input.length < 1-threshold){
                let toCheck = input.substring(i, size);

                if (!Object.keys(repeats).includes(toCheck)) {
                    let count = input.split(toCheck).length-1;
                    let ratio = (count*toCheck.length)/input.length;

                    if (ratio > threshold && count > 1){
                        
                        repeats[toCheck] = (ratio*100).toFixed(2);
                        if (repeats[toCheck] === "100.00") {
                            let repeats = {};
                            repeats[toCheck] = 100;
                            return repeats;
                        }
                    }
                }
            }
        }
    }
    filterPatterns(repeats);
    return repeats;
}

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
            if (/^[A-Za-z]+$/.test(part) && part.length > 2) {
                result.push(part);
                if (split[i-1] !== '' || (i+1 < split.length && split[i+1] !== '') && split.length <= 5) {
                    report.simpleCombo = 'Word and special character combination';
                }
            }
        }
    }
    return result;
}

function checkLength(input) {
    let len = '';
    if (input.length < 8) {
        len = 'Password is very short.';
    }
    return len;
}

function analyze(input) {
    let report = {};
    
    let split = input.split(/([A-Za-z]+)/);

    let len = checkLength(input);
    if (len !== '') {
        report.pwlength = len;
    }

    console.log(split);
    let words = getWords(split, report);
    console.log(words)
    if (words.length === 0) {
        report.letters = 'Password has no letters.';
    }
    else if (split.length === 3 && split[0] === '' && split[split.length-1] === '') {
        report.letters = 'Password is only letters.'
    }

    let validWords = checkSingleWord(words);
    if (validWords.length > 0) {
        let wordAlert = 'Contains actual words:';
        validWords.forEach(function (w) {
            wordAlert += ' '+ w;
        })
        report.words = wordAlert;
    }

    let repeats = checkRepeats(input);
    if (Object.keys(repeats).length > 0) {
        report.patterns = repeats;
    }

    console.log(report)
    return report;
}