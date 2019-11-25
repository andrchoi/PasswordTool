'use strict';

const INFOBOX_ID = 'TEAM_AMAZ_PW_TOOL_INFOBOX'

function createHTMLReport(report) {
    let section = document.createElement('div');
    let summary;
    let text;

    for (let key in report){
        summary = document.createElement('b');
        summary.textContent = report[key];

        if (key === 'pwlength') {
            text = document.createTextNode(' Passwords should have at least 8 characters. Short passwords are easier to crack.')
        } 
        else if (key === 'letters') {
            text = document.createTextNode(' Better passwords contain a variety of character types.')
        }
        else if (key === 'wordAlert') {
            text = document.createTextNode(' Real words are vulnerable to dictionary attacks.')
        }
        else if (key === 'simpleCombo') {
            text = document.createTextNode(' Simple letter and character sequences (ex. test123) are common and easy to guess.')
        }
        else if (key === 'patterns') {
            summary.textContent = 'Reapeated patterns:'
            text = document.createElement('div');
            let list = document.createElement('ul');
            let patterns = report[key];
            for (let p in patterns) {
                let entry = document.createElement('li');
                entry.textContent = p+': '+patterns[p]+ '%';
                list.appendChild(entry);
            }
            text.appendChild(list);
            let info = document.createTextNode('The percentage indicates how much of the password is composed from the pattern. Passwords that repeat often are easier to guess.')
            text.appendChild(info);
        }
        else if (key === 'passWalk') {
            summary.textContent = 'Password Walking:'
            text = document.createTextNode(` ${report[key].percentage}% of this password contains characters that are next to each other on the keyboard. The lower the better.`)
        }
        
        section.appendChild(summary);
        section.appendChild(text);
        let br = document.createElement('br');
        section.appendChild(br);
        if (key !== 'patterns') {
            br = document.createElement('br');
            section.appendChild(br);
        }
    }
    return section;
}

function showInfo(compromised, report) {
    // Remove existing popup if it exists
    if (document.getElementById(INFOBOX_ID)) {
        document.getElementById(INFOBOX_ID).remove();
    }

    let infoBox = document.createElement('div');
    infoBox.setAttribute("id", INFOBOX_ID)

    let title = document.createElement('h2');
    title.className = 'title';
    title.textContent = 'Password Analysis Report';
    infoBox.appendChild(title);

    let isCompromised = document.createElement('h3');
    isCompromised.textContent = `Status: ${compromised? 'Compromised': 'Secure'}`;
    isCompromised.setAttribute('class','comp_'+compromised);
    infoBox.appendChild(isCompromised);
    let compromisedDesc = document.createElement('p');
    compromisedDesc.textContent = `This password has ${compromised ? '' : 'not'} been compromised`;
    infoBox.appendChild(compromisedDesc);

    let simpleReport = document.createElement('h3');
    simpleReport.textContent = 'Report: ';
    infoBox.appendChild(simpleReport);

    infoBox.appendChild(createHTMLReport(report));

    var closeBtn = document.createElement("button");
    closeBtn.setAttribute("id", "close-pass-tool");
    closeBtn.innerHTML = "Close";           
    closeBtn.onclick = function() {
        document.getElementById(INFOBOX_ID).remove();
    };
    infoBox.appendChild(closeBtn);

    document.body.appendChild(infoBox);
}