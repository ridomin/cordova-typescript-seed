class startPage{
    counterSpan: HTMLSpanElement
    secondsLeft: number = 300
    constructor(){
        this.counterSpan=document.getElementById("clock")
        this.counterSpan.innerText=this.secondsLeft.toString()
        this.countDown()
    }
    countDown(){
        this.secondsLeft = parseInt(this.counterSpan.innerText, 10)
        this.secondsLeft--
        if (this.secondsLeft>0) {
            this.counterSpan.innerText = this.secondsLeft.toString()
            setTimeout(() => this.countDown(), 1000);
        }
    }
}
new startPage()