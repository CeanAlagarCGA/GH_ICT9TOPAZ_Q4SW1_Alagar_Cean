function log_in() {
    num1 = document.getElementById("input1").value;
    num2 = document.getElementById("input2").value;

    if (num1 === "Kuli_18" && num2 === "2026") {
        window.alert("Login successful!");
    } else {
        window.alert("Incorrect username or password.");
    }
}