import {DeviceReadyPage} from "./DeviceReadyPage"
// main class invoked from index.html
export class App {
    constructor() {
        let deviceReadyPage = new DeviceReadyPage()
        deviceReadyPage.render(document.body);
        document.addEventListener("deviceready",
            () => deviceReadyPage.onDeviceReady(), false)
    }
}