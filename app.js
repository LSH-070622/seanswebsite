// selecting everything with the class of section
const sections = document.querySelectorAll('.section');

const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');

const allSections = document.querySelectorAll('.main-content');


function PageTransitions(){
  //Button click active class
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){
                    let currentBtn = document.querySelectorAll('.active-btn');
                    currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
                    this.className += ' active-btn';
                })
  }
  // Iterating over all sections and attaching event listener
  allSections.forEach(section => {
    section.addEventListener('click', (e) => {
        const target = e.target.closest('[data-id]');
            if (target) {
                const id = target.dataset.id;
                
                sectBtns.forEach((btn) => {
                    btn.classList.remove('active')
                });
                target.classList.add('active');
                sections.forEach((section) => {
                    section.classList.remove('active')
                })
                const element = document.getElementById(id);
                if (element) {
                    element.classList.add('active');
                } else {
                    console.warn(`Element with id ${id} does not exist`);
                }
            }
    });
});
}PageTransitions();