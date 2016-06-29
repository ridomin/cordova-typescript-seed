﻿// sample class 
export class DeviceReadyPage {

    constructor() {
        let mainDiv: HTMLElement = document.createElement("div")
        mainDiv.className = "app"
        mainDiv.innerHTML = '<h1>Tools for Apache Cordova </h1><div id= "deviceready" class="blink" ><p class="event listening" > Connecting to Device< /p><p class="event received">Device is Ready</p></div>'
        document.body.appendChild(mainDiv)
    }

    start() {
        let parentElement : HTMLElement= document.getElementById('deviceready');
        let listeningElement :Element= parentElement.querySelector('.listening');
        let receivedElement :Element= parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    }
}