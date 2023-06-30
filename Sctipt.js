var PI = document.getElementById("result");
var lbl = document.getElementById("lbl");
function Sun() {
    var Nun1 = document.getElementById("Nun1").value;
    var Nun2 = document.getElementById("Num2").value;
    Nun1 = Number(Nun1);
    Nun2 = Number(Nun2);
    var result = Nun1 + Nun2;
    PI.innerHTML = result;
    lbl.innerHTML = "+";
}
function Min() {
    var Nun1 = document.getElementById("Nun1").value;
    var Nun2 = document.getElementById("Num2").value;
    Nun1 = Number(Nun1);
    Nun2 = Number(Nun2);
    var result = Nun1 - Nun2;
    PI.innerHTML = result;
    lbl.innerHTML = "-";
}
function zarb() {
    var Nun1 = document.getElementById("Nun1").value;
    var Nun2 = document.getElementById("Num2").value;
    Nun1 = Number(Nun1);
    Nun2 = Number(Nun2);
    var result = Nun1 * Nun2;
    PI.innerHTML = result;
    lbl.innerHTML = "×";

}
function tghsim() {
    var Nun1 = document.getElementById("Nun1").value;
    var Nun2 = document.getElementById("Num2").value;
    Nun1 = Number(Nun1);
    Nun2 = Number(Nun2);
    var result = Nun1 / Nun2;
    PI.innerHTML = result;
    lbl.innerHTML = "÷";

}
function jazr() {
    var Nun1 = document.getElementById("Nun1").value;
    var Nun2 = document.getElementById("Num2").value;
    Nun1 = Number(Nun1);
    Nun2 = Number(Nun2);
    var result = Math.sqrt(Nun1);
    PI.innerHTML = result;
    lbl.innerHTML = "√";

}
function Pover() {
    var Nun1 = document.getElementById("Nun1").value;
    var Nun2 = document.getElementById("Num2").value;
    Nun1 = Number(Nun1);
    Nun2 = Number(Nun2);
    var result = Math.pow(Nun1, Nun2);
    PI.innerHTML = result;
    lbl.innerHTML = "^";

}
function Clear() {
    PI.innerHTML = null;
    var Nun1 = (document.getElementById("Nun1").value = null);
    var Nun2 = (document.getElementById("Num2").value = null);
    lbl.innerHTML = null;
}
function Sin() {
    var Nun1 = document.getElementById("Nun1").value;
    var Nun2 = document.getElementById("Num2").value;
    Nun1 = Number(Nun1);
    Nun2 = Number(Nun2);
    var result = Math.sin((Nun1 * Math.PI) / 180);
    PI.innerHTML = result;
    lbl.innerHTML = "Sin";

}
function Cos() {
    var Nun1 = document.getElementById("Nun1").value;
    var Nun2 = document.getElementById("Num2").value;
    Nun1 = Number(Nun1);
    Nun2 = Number(Nun2);
    var result = Math.cos((Nun1 * Math.PI) / 180);
    PI.innerHTML = result;
    lbl.innerHTML = "Cos";

}
function Tan() {
    var Nun1 = document.getElementById("Nun1").value;
    var Nun2 = document.getElementById("Num2").value;
    Nun1 = Number(Nun1);
    Nun2 = Number(Nun2);
    var result = Math.tan((Nun1 * Math.PI) / 180);
    PI.innerHTML = result;
    lbl.innerHTML = "Tan";

}
function dark() {
    document.body.classList.toggle('dark')

}
