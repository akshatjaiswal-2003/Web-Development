// var para = document.querySelector('p')
// var charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// var text = para.innerText
// para.addEventListener('mouseenter', function () {
//     setInterval(function () {
//         var str = text.split('').map((char, index) => {
//             return charecters.split('')[Math.floor(Math.random() * 53)]
//         }).join('')
//         para.innerText = str
//     }, 30)
// })


// var para = document.querySelector('p');
// var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// var originalText = para.innerText;

// para.addEventListener('mouseenter', function () {
//     let i = 0;

//     var interval = setInterval(function () {
//         para.innerText = originalText
//             .split("")
//             .map((char, index) => {
//                 if (index < i) {
//                     return originalText[index];
//                 }
//                 return characters[Math.floor(Math.random() * characters.length)];
//             })
//             .join("");

//         if (i >= originalText.length) {
//             clearInterval(interval);
//         }

//         i++;
//     }, 40);
// });

