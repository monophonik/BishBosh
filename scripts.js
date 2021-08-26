

function generate() {

    clear();

    var inputNr = document.getElementById("numbers")
    var bishNr = document.getElementById("bish");
    var boshNr = document.getElementById("bosh");

    var inputLabel = document.getElementById("numbersLb");
    inputLabel.innerHTML = inputNr.value;

    var bishLabel = document.getElementById("bishLb")
    bishLabel.innerHTML = bishNr.value;

    var boshLabel = document.getElementById("boshLb")
    boshLabel.innerHTML = boshNr.value;

    var resultDiv = document.getElementById("result");

    for (let index = 1; index <= inputNr.value; index++) {
        
        if ((index % bishNr.value == 0) && (index % boshNr.value == 0)) {
            var item = document.createElement("div");
            item.innerHTML = "Bish-Bosh";
            resultDiv.appendChild(item);
        }
        else if (index % bishNr.value == 0) {
            var item = document.createElement("div");
            item.innerHTML = "Bish";
            resultDiv.appendChild(item);
        }
        else if (index % boshNr.value == 0) {
            var item = document.createElement("div");
            item.innerHTML = "Bosh";
            resultDiv.appendChild(item);
        }
        else {
            var item = document.createElement("div");
            item.innerHTML = index;
            resultDiv.appendChild(item);
        }
        
    }



}

function clear() {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
}