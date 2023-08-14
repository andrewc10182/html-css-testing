function displayText() {
    var text = document.getElementById("textField");
    text.style.display = "block";

    let counter = document.querySelector('h2');
    let count = 1;
    setInterval(() => {
        var check_id = document.getElementById("check-id");
        check_id.style.display = "block";
        counter.innerText = count;
        count++;
        if (count > 3) {
            //location.replace('hello.html');
            location.replace('problem1.html')
        }
    }, 1000)
}