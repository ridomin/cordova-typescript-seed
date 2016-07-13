class StartPage {
    counterSpan: HTMLSpanElement
    npmLog: HTMLSpanElement
    secondsLeft: number = 60
    lastMessage: number = 0
    constructor() {
        this.counterSpan = document.getElementById("clock")
        this.npmLog = <HTMLSpanElement>document.getElementById("npmLog")
        this.counterSpan.innerText = this.secondsLeft.toString()
        this.countDown()
    }
    countDown() {
        this.secondsLeft = parseInt(this.counterSpan.innerText, 10)
        if (this.secondsLeft % 10 === 0) {
           this.npmLog.innerText = this.messages[this.lastMessage % this.messages.length]
           this.lastMessage++
        }
        else {
            this.npmLog.innerHTML += "."
        }

        this.secondsLeft--
        if (this.secondsLeft > 0) {
            this.counterSpan.innerText = this.secondsLeft.toString()
            setTimeout(() => this.countDown(), 1000);
        } else if (this.secondsLeft === 0){
            this.counterSpan.style.color = "darkgreen"
            this.counterSpan.innerText = "Check that your dependencies have been installed."
            this.npmLog.style.display = "none"
        }

    }
    messages: string[] = [
        "> Loading Node (a javascript engine) ",
        "> Loading Npm (a javascript package manager) ",
        "> Installing typescript (a javascript superset) ",
        "> Installing tsd (typescript type definition tool) ",
        "> Installing tslint (a typescript language checker) ",
        "> Running npm postinstall script (to acquire typings) ",
    ]
}
new StartPage()