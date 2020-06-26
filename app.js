function getUserinput(numbers) {
    inputScreen = document.getElementById('inputScreen');
    inputScreen.value += numbers;
}

function deleteAll() {
    inputScreen = document.getElementById('inputScreen');
    inputScreen.value = "";
}

function lastOneFun() {
    inputScreen = document.getElementById('inputScreen');
    inputScreen.value = eval(inputScreen.value);

}