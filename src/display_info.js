'use strict';

const SIZE = '30em'

function showInfo(report) {
    let infoBox = document.createElement('div');
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

    document.body.appendChild(infoBox);

    console.log(report);
}