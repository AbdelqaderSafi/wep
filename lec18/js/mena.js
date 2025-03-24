let btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.onclick = () => {
        let tap = btn.getAttribute('data-tap');
        document.querySelector('button.active').classList.remove('active');
        btn.classList.add('active');
        document.querySelectorAll('div').forEach((el) =>{
            el.style.display = 'none';
        })
        document.querySelector(tap).style.display = 'block';
    }
    

})