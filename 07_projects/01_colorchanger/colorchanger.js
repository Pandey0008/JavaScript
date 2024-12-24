// const buttons = document.querySelectorAll('.button');
// console.log(buttons);
// const body = document.querySelector('body');
// buttons.forEach(function (button) {
//     console.log(button);
//     button.addEventListener('click', function (e){
//         console.log(e);
//         console.log(e.target);
//         if (e.target.id==='grey') {
//             body.style.backgroundColor = e.target.id;
//         } else if (e.target.id==='white') {
//             body.style.backgroundColor = e.target.id;
//         }
//         else if (e.target.id==='blue') {
//             body.style.backgroundColor =    e.target.id;
//         }
//         else (e.target.id==='yellow') 
//         {
//             body.style.backgroundColor = e.target.id;
//         }
// });
// });


const buttons=document.querySelectorAll('.button');
console.log(buttons);
const body=document.querySelector('body');
buttons.forEach(function(button){
    button.addEventListener('click',function (color1) {
        if (color1.target.id==='grey') {
            body.style.backgroundColor=color1.target.id;
        }
        else if (color1.target.id==='white') {
            body.style.backgroundColor=color1.target.id;
        }
        else if (color1.target.id==='blue') {
            body.style.backgroundColor=color1.target.id;
        }
        else if (color1.target.id==='yellow') {
            body.style.backgroundColor=color1.target.id;
        }
        else if (color1.target.id==='green') {
            body.style.backgroundColor=color1.target.id;
        }
        else if (color1.target.id==='red') {
            body.style.backgroundColor=color1.target.id;
        }
        else {
            body.style.backgroundColor=color1.target.id;
        }
    })
})

