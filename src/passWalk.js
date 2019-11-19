var mapping = {
    '1': '~`1!2@qQ',
    '!': '~`1!2@qQ',
    '2': '1!2@3#qQwW',
    '@': '1!2@3#qQwW',
    '3': '2@wW3#eE4$',
    '#': '2@wW#3eE4$',
    '4': '3#$45%eErR',
    '$': '3#4$5%eErR',
    '5': '4$%56^rRtT',
    '%': '4$5%6^rRtT',
    '6': '5%^67&tTyY',
    '^': '5%67^&tTyY',
    '7': '6^&87*YyuU',
    '&': '6^78*&YyuU',
    '8': '7&*89(uUiI',
    '*': '7&8*9(uUiI',
    '9': '8*9()0iIoO',
    '(': '(90iIoO8*)',
    '0': '9()0oOpP',
    ')': '9()0oOpP',
    'q': '1!2@qQwWaAsS',
    'Q': '1!2@qQwWaAsS',
    'w': 'qQ2@3#wWeEsSaA',
    'W': 'qQ2@3#wWeEsSaA',
    'e': 'wW3fF#4$rRdDsSeE',
    'E': 'wW3#4$rFfRdDsSEe',
    'r': 'eE4$5%tTfFgGdD',
    'R': 'eE4$5%tTfFgGdD',
    't': 'tTrRyYfhHFgG5%6^',
    'T': 'tTrRyYfFghHG5%6^',
    'y': 'tTyYuUgGhHjJ6^7&',
    'Y': 'tTyYuUgGhHjJ6^7&',
    'u': 'yYuUiIhkKHjJ7&8*',
    'U': 'yYuUiIhHjkKJ7&8*',
    'i': 'uUiIoOjJklLK8*9(',
    'I': 'uUiIoOjJklLK8*9(',
    'o': 'iIoOpP9(0Ll)kK',
    'O': 'iIoOpP9(0Ll)kK',
    'p': 'oOpP0)lL',
    'P': 'oOpP0)lL',
    'a': 'qQwWsSxXzZaA',
    'A': 'qQwWsSxXzZaA',
    's': 'aAqQwWeEdDcCxXzZsS',
    'S': 'aAqQwWeEdDcCxXzZsS',
    'd': 'wWeErRfFsSxXcCvVdD',
    'D': 'wWeErRfFsSxXcCvVdD',
    'f': 'fFeErRtTdDgGcCvVbB',
    'F': 'fFeErRtTdDgGcCvVbB',
    'g': 'rRfFvVbBgGtTyYhHnN',
    'G': 'rRfFvVbBgGtTyYhHnN',
    'h': 'tTgGbBnNhHyYuUjJmM',
    'H': 'tTgGbBnNhHyYuUjJmM',
    'j': 'yYhHnNmMjJuUiIkK',
    'J': 'yYhHnNmMjJuUiIkK',
    'k': 'uUjJmMkKiIoOlL',
    'K': 'uUjJmMkKiIoOlL',
    'l': 'iIkKlLoOpP',
    'L': 'iIkKlLoOpP',
    'z': 'aAsSxXzZ',
    'Z': 'aAsSxXzZ',
    'x': 'aAsSdDcCxXzZ',
    'X': 'aAsSdDcCxXzZ',
    'c': 'sSxXcCdDfFvV',
    'C': 'sSxXcCdDfFvV',
    'v': 'dDfFgGbBxXvV',
    'V': 'dDfFgGbBxXvV',
    'b': 'fFvVbBgGhHnN',
    'B': 'fFvVbBgGhHnN',
    'n': 'gGbBnNhHjJmM',
    'N': 'gGbBnNhHjJmM',
    'm': 'hHnNmMjJkK',
    'M': 'hHnNmMjJkK'
};

var string = 'qwertzxcvbk';

function getPassWalk(pass) {
    var res = [];

    var resString = pass[0];
    for (var i = 1; i < pass.length; i++) {
        if (mapping[pass[i - 1]].includes(pass[i])) {
            resString += pass[i];
        } else {
            if (resString.length > 1) {
                res.push(resString);
            }

            resString = pass[i];
        }
    }
    
    if (resString.length > 1) {
        res.push(resString);
    }

    var length = res.join('').length;
    var percentage = Math.ceil(length / pass.length * 100);

    return {
        percentage: percentage,
        list: res
    }
};

getPassWalk(string);