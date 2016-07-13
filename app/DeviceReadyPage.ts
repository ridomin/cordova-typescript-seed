import {CounterComponent} from './CounterComponent'
// sample class
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
            `<div>Running on ${window.cordova.platformId} version ${window.cordova.version}</div>` +
            "<div id='deviceready' class='blink'>" +
            "  <p id='statusP' class='event listening'>Connecting to Device</p>" +            
            "</div>"
        target.appendChild(mainDiv) 
             
        this.counter.render(mainDiv)
    }

    onDeviceReady() {
        // console.log(window.cordova.version)        
        let statusP: HTMLElement = document.getElementById("statusP")
        statusP.className = "event received"
        statusP.innerText = "Device Ready"        
       
    }

}