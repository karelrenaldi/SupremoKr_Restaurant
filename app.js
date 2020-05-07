const navButton = document.querySelector(`button[aria-expanded]`)

navButton.addEventListener('click',(e)=>{
    const expanded = e.currentTarget.getAttribute('aria-expanded') === "true";
    navButton.setAttribute(`aria-expanded`,!expanded)
})