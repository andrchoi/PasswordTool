'use strict';

function caseChanges(input) {
    let cases = [];
    cases.push(input.toUpperCase());
    cases.push(input.toLowerCase());

    for (let i = 0; i < input.length; i++){
        let start = input.substring(0,i);
        let end = input.substring(i+1);
        let mod = start + input[i].toUpperCase() + end;
        if (!cases.includes(mod)){
            cases.push(mod);
        }

        mod = start + input[i].toLowerCase() + end;
        if (!cases.includes(mod)){
            cases.push(mod);
        }
    }

    return cases;
}

function mutateInput(input) {
    let modifications = [];

    return modifications;
}