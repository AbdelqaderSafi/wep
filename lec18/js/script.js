let links = document.querySelectorAll('header .menu a')

links.forEach((link) =>{
    link.onclick = (e) => {
        e.preventDefault();

        let part = link.getAttribute('href');
        let space = document.querySelector(part).offsetTop;
        console.log(space);
        window.scrollTo({
            top : (space - 55),
            behavior : 'smooth'
        })

    }

})


// let home    = document.querySelector('.home')
// let about   = document.querySelector('.about')
// let contact = document.querySelector('.contact')

// home.onclick = (e) => {
//     e.preventDefault();
//     window.scrollTo({
//         top : 55,
//         behavior : 'smooth' 
//     })
// }
// about.onclick = (e) => {
//     e.preventDefault();
//     window.scrollTo({
//         top : 555,
//         behavior : 'smooth' 
//     })
// }
// contact.onclick = (e) => {
//     e.preventDefault();
//     window.scrollTo({
//         top : 1055,
//         behavior : 'smooth' 
//     })
// }


// let links = document.querySelectorAll('header .menu a');

// links.forEach((link) => {
//     link.onclick = (e) => {
//         e.preventDefault();
//         let part = link.getAttribute('href');
//         let space = document.querySelector(part).offsetTop;

//         window.scrollTo({
//               top : (space -55),
//               behavior : 'smooth' 
//                 })

//     }

// })