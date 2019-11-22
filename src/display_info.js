'use strict';

const SIZE = '30em'

function showInfo(report) {
    console.log('display')
    let infoBox = document.createElement('div');
    infoBox.textContent = 'hello world';
    infoBox.className = 'TEAM_AMAZ_PA_TOOL_REPORT';
    infoBox.style.width = SIZE;
    infoBox.style.height = SIZE;
    infoBox.style.position = 'fixed'; 
    infoBox.style.top = '1em';
    infoBox.style.right = '1em';
    infoBox.style.backgroundColor = 'white';
    infoBox.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2);';

    document.body.appendChild(infoBox);
    

    console.log(report);
}