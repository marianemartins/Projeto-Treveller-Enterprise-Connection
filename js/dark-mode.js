const darkMode = document.querySelector('#switch-shadow');

darkMode.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
})

// ToDo
// Guardar no localStorage e fazer o aumenta fonte e teclas de atalho e handtalk