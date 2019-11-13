'use strict';

function addChange(list, mod, original) {
    if (!list.includes(mod) && mod !== original){
        list.push(mod);
    }
}

function caseChanges(cases, input) {

    let mod = input.toUpperCase();
    addChange(cases, mod, input);

    mod = input.toLowerCase();
    addChange(cases, mod, input);

    for (let i = 0; i < input.length; i++){
        let start = input.substring(0,i);
        let end = input.substring(i+1);
        let mod = start + input[i].toUpperCase() + end;
        addChange(cases, mod, input);

        mod = start + input[i].toLowerCase() + end;
        addChange(cases, mod, input);
    }

    return cases;
}

function charChanges(input) {
    // ASCII chars 32-127 (d)
    let changes = [];

    return changes;
}



function removeLetterPermutations(perms, input){
    let change;
    for (let i = 0; i < input.length; i++) {
        change = input.substring(0,i) + input.substring(i+1);
        addChange(perms, change, input);
    }
    return perms;
}

function mutateInput(input) {
    let modifications = [];

    caseChanges(modifications, input)
    removeLetterPermutations(modifications, input);

    console.log(modifications);

    return modifications;
}