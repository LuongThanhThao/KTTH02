function giaiPhuongTrinh() {
    var a = parseFloat(document.getElementById('input-a').value);
    var b = parseFloat(document.getElementById('input-b').value);
    var resultEl = document.getElementById('result');

    if (a === 0) {
        if (b === 0) {
            resultEl.innerHTML = "Phương trình vô số nghiệm";
        } else {
            resultEl.innerHTML = "Phương trình vô nghiệm";
        }
    } else {
        var x = -b / a;
        resultEl.innerHTML = "Nghiệm của phương trình là x = " + x;
    }
    
}