import {DeviceReadyPage} from "./DeviceReadyPage"

export class App {
    private deviceReadyPage: DeviceReadyPage
    constructor() {
        this.deviceReadyPage = new DeviceReadyPage()
        this.deviceReadyPage.render(document.body);
        document.addEventListener("deviceready", this.onDeviceReady.bind(this), false)
    }

    onDeviceReady() {        
        this.deviceReadyPage.onDeviceReady();
    }
}