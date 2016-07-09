import {DeviceReadyPage} from "./DeviceReadyPage"

export class App {
    init() {
        document.addEventListener("deviceready", this.onDeviceReady, false)
    }

    onDeviceReady() {
        new DeviceReadyPage().start()
    }
}