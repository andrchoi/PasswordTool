'use strict';

const SIZE = '30em'
const INFOBOX_ID = 'TEAM_AMAZ_PW_TOOL_INFOBOX'

function showInfo(compromised, report, passWalk) {
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
    isCompromised.textContent = 'Compromised: ' + compromised;
    infoBox.appendChild(isCompromised);
    let compromisedDesc = document.createElement('p');
    compromisedDesc.textContent = `This password has ${compromised ? '' : 'not'} been compromised`;
    infoBox.appendChild(compromisedDesc);

    let simpleReport = document.createElement('h3');
    simpleReport.textContent = 'Report: ';
    infoBox.appendChild(simpleReport);

    let passWalking = document.createElement('h3');
    passWalking.textContent = `Password walking: ${passWalk.percentage}%`;
    infoBox.appendChild(passWalking);
    let passWalkDesc = document.createElement('p');
    passWalkDesc.textContent = `${passWalk.percentage}% of this password contains characters that are next to each other on the keyboard. The lower the better.`;
    infoBox.appendChild(passWalkDesc);

    var closeBtn = document.createElement("button");
    closeBtn.setAttribute("id", "close-pass-tool");
    closeBtn.innerHTML = "Close";           
    closeBtn.onclick = function() {
        document.getElementById("info-box").remove();
    };
    infoBox.appendChild(closeBtn);

    document.body.appendChild(infoBox);
}