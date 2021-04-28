const allBtn = document.querySelectorAll('.containerLigne');

allBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
        btn.classList.toggle('active');

    })
})