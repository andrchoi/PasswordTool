'use strict';

const SIZE = '30em'

function showInfo(compromised, report, passWalk) {
    // Remove existing popup if it exists
    if (document.getElementById("info-box")) {
        document.getElementById("info-box").remove();
    }

    let infoBox = document.createElement('div');
    infoBox.setAttribute("id", "info-box")
    infoBox.className = 'TEAM_AMAZ_PA_TOOL_REPORT';
    infoBox.style.width = SIZE;
    infoBox.style.height = SIZE;
    infoBox.style.position = 'fixed'; 
    infoBox.style.top = '1em';
    infoBox.style.right = '1em';
    infoBox.style.backgroundColor = 'white';
    infoBox.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
    infoBox.style.padding = '2em';

    let title = document.createElement('h2');
    title.textContent = 'Password Analysis Report';
    title.style.textAlign = 'center';
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
    passWalkDesc.textContent = `${passWalk.percentage}% of this password contains characters that are next to each other on the keyboard`;
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