let box = document.getElementById("box");
let changeBtn = document.getElementById("change");
let gradientBtn = document.getElementById("gradient");

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return { r, g, b };
}

function rgbToHex(r, g, b) {
    return (
        "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0")
    );
}

// --- Generate Solid Color ---
changeBtn.addEventListener("click", () => {
    let { r, g, b } = randomColor();

    let rgbValue = `rgb(${r}, ${g}, ${b})`;
    let hexValue = rgbToHex(r, g, b);

    box.style.background = rgbValue;

    document.getElementById("rgb").innerText = rgbValue;
    document.getElementById("hex").innerText = hexValue;
});

// --- Generate Gradient Color ---
gradientBtn.addEventListener("click", () => {
    let c1 = randomColor();
    let c2 = randomColor();

    let rgb1 = `rgb(${c1.r}, ${c1.g}, ${c1.b})`;
    let rgb2 = `rgb(${c2.r}, ${c2.g}, ${c2.b})`;

    box.style.background = `linear-gradient(135deg, ${rgb1}, ${rgb2})`;

    document.getElementById("rgb").innerText = `${rgb1}, ${rgb2}`;
    document.getElementById("hex").innerText =
        `${rgbToHex(c1.r, c1.g, c1.b)} , ${rgbToHex(c2.r, c2.g, c2.b)}`;
});

// --- Copy to Clipboard ---
function copyText(id) {
    let text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}
