var startPage = (function () {
    function startPage() {
        this.secondsLeft = 300;
        this.counterSpan = document.getElementById("clock");
        this.counterSpan.innerText = this.secondsLeft.toString();
        this.countDown();
    }
    startPage.prototype.countDown = function () {
        var _this = this;
        this.secondsLeft = parseInt(this.counterSpan.innerText, 10);
        this.secondsLeft--;
        if (this.secondsLeft > 0) {
            this.counterSpan.innerText = this.secondsLeft.toString();
            setTimeout(function () { return _this.countDown(); }, 1000);
        }
    };
    return startPage;
}());
new startPage();
