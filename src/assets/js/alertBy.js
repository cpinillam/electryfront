let keysPressed = {};

document.addEventListener('keydown', (event) => {
keysPressed[event.key] = true;
if (keysPressed['Alt'] && event.key == 'o') {
    alert("Created By Carlos Pinilla");
}
});

document.addEventListener('keyup', (event) => {
delete keysPressed[event.key];
});