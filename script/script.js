let buttons = document.querySelectorAll('.button')

buttons.forEach(button => button.addEventListener('click', fall))



function fall() {

    let section = this.closest('.area')
    setTimeout(()=>section.classList.add('animate__hinge'))

}