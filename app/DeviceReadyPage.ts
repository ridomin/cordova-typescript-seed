import {CounterComponent} from "./CounterComponent"

// sample class representing the main page
// imports the counter component

export class DeviceReadyPage {
    counter: CounterComponent

    constructor() {
        this.counter = new CounterComponent()
    }

    render(target: HTMLElement) {
        let mainDiv: HTMLElement = document.createElement("div")
        mainDiv.className = "app"
        mainDiv.innerHTML =
            "<h1>Tools for Apache Cordova </h1>" +
            "<div id='runtimeInfo' class='info'>initializing..</div>" +
            "<div id='deviceready' class='blink'>" +
            "  <p id='statusP' class='event listening'>Connecting to Device</p>" +
            "</div>"
        target.appendChild(mainDiv)
        this.counter.render(mainDiv)
    }

    onDeviceReady() {
        let statusP: HTMLElement = document.getElementById("statusP")
        statusP.className = "event received"
        statusP.innerText = "Device Ready"
        let divInfo: HTMLElement = document.getElementById("runtimeInfo")
        divInfo.innerText = `running cordova-${window.cordova.platformId }@${window.cordova.version}`

    }

}