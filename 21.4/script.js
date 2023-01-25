const on = document.querySelector('.on');
const off = document.querySelector('.off');

on.style.display = 'none';

off.addEventListener('click',function(){
    off.style.display = 'none';
    on.style.display = 'block';
})

on. addEventListener('click', function(){
    on.style.display = 'none';
    off.style.display = 'block';
})