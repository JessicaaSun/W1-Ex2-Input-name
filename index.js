function submit() {
    let inputValue = document.getElementById("inputName").value;
    document.getElementById("outputName").innerHTML = `Hello ${inputValue}`;
}