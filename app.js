function scrollTo(el){
    window.scroll({
        left: 0,
        top: el.offsetTop,
        behavior: "smooth"
    })
}
var main = document.querySelector('.main-img');
var head = document.querySelector('.head-img');
head.addEventListener('wheel', () => {
    scrollTo(main);
 })
 main.addEventListener('wheel', () => {
    scrollTo(head);
 })

 
 //--
const btn1 = document.getElementById('it1');
const btn2 = document.getElementById('it2');
const btn3 = document.getElementById('it3');
const btn4 = document.getElementById('it4');
const btn5 = document.getElementById('it5');

const modal1 = document.getElementById('myModal1')
const modal2 = document.getElementById('myModal2')
const modal3 = document.getElementById('myModal3')
const modal4 = document.getElementById('myModal4')
const modal5 = document.getElementById('myModal5')


btn1.addEventListener('click', openModal1);
btn2.addEventListener('click', openModal2);
btn3.addEventListener('click', openModal3);
btn4.addEventListener('click', openModal4);
btn5.addEventListener('click', openModal5);

function openModal1(){
    modal1.classList.add('open')
    attachModalEvents()
}
function openModal2(){
    modal2.classList.add('open')
    attachModalEvents()
}
function openModal3(){
    modal3.classList.add('open')
    attachModalEvents()
}
function openModal4(){
    modal4.classList.add('open')
    attachModalEvents()
}function openModal5(){
    modal5.classList.add('open')
    attachModalEvents()
}



function attachModalEvents(){
    document.addEventListener('keydown', handleEsc)
    if(modal1){
     modal1.addEventListener('click', handleOutside) 
    }
    if(modal2){
        modal2.addEventListener('click', handleOutside) 
    }
    if(modal3){
        modal3.addEventListener('click', handleOutside) 
    }
    if(modal4){
        modal4.addEventListener('click', handleOutside) 
    }
    if(modal5){
        modal5.addEventListener('click', handleOutside) 
    }
}

function handleEsc(event){
    if (event.key === 'Escape'){
        closeModal()
    }
}

function handleOutside(e) {
    const isClickedOutside = !e.target.closest(".modal-content");
    if (isClickedOutside) {
        return closeModal();
    }
}

function closeModal(){
    modal1.classList.remove('open')
    modal2.classList.remove('open')
    modal3.classList.remove('open')
    modal4.classList.remove('open')
    modal5.classList.remove('open')
    detachModalEvents();
}

function detachModalEvents(){
    document.removeEventListener('keydown', handleEsc)
    modal1.removeEventListener('click', handleOutside)
    modal2.removeEventListener('click', handleOutside)
}