const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


// using arrow function
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
    container.classList.add('add-bg-left');
}); 

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
    container.classList.remove('add-bg-left');

}); 

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
    container.classList.add('add-bg-right');
}); 

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
    container.classList.remove('add-bg-right');
}); 

