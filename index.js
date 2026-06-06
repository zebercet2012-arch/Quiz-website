let puan = 0;
let ilerleme = 0;

function dogruCevap(abc) {
    puan = puan + 10;

    ilerleme++;

    document.getElementById("score").innerText = puan;

    document.getElementById("bar").value = ilerleme;

    abc.disabled = true;
}

function yanlisCevap(button) {
    puan = puan - 5;
    document.getElementById("score").innerText = puan;

    button.style.backgroundColor = "red";
}

function sifirla() {
    puan = 0;
    document.getElementById("score").innerText = puan;
}