document.addEventListener("keydown", (event) => {
    const asciiCode = event.keyCode || event.which;
    const alt = event.altKey ? "Alt key" : "";
    const ctrl = event.ctrlKey ? "Ctrl key" : "";
    const shift = event.shiftKey ? "Shift key" : "";

    alert(`ASCII code :  ${asciiCode}\n${alt}\n${ctrl}\n${shift}`);


});

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("Context menu is disabled!");
});