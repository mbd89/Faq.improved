const showQuestion = document.querySelectorAll('.accordion-question-show')
const answers = document.querySelectorAll('.accordion-answer')
const hideQuestion = document.querySelectorAll('.accordion-question')
const plusIcon = document.querySelector('#plus-icon')


for (let i = 0; i<showQuestion.length; i++){
    showQuestion[i].addEventListener('click', ()=>{
      showQuestion[i].classList.add('hidden')
      hideQuestion[i].classList.remove('hidden')
      answers[i].classList.remove('hidden')

    })
}

for (let i = 0; i<hideQuestion.length; i++){
    hideQuestion[i].addEventListener('click', ()=>{
      hideQuestion[i].classList.add('hidden')
      showQuestion[i].classList.remove('hidden')
      answers[i].classList.add('hidden')

    })
}



/*for (let i = 0; i<showQuestion.length; i++){
    showQuestion[i].addEventListener('click', ()=>{
       answers[i].classList.add('hidden')
       plusIcon[i].classList.remove('hidden')
       minusIcon[i].classList.add('hidden')
      
    })
 }
 */
 






// keyboard navigation




