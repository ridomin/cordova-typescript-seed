import {DeviceReadyPage} from "./DeviceReadyPage"
// main class invoked from index.html
export class App {

    private deviceReadyPage: DeviceReadyPage

    constructor() {
        this.deviceReadyPage = new DeviceReadyPage()
        this.deviceReadyPage.render(document.body);
        document.addEventListener("deviceready", () => this.onDeviceReady(), false)
    }

    onDeviceReady() {
        this.deviceReadyPage.onDeviceReady();
    }
}