const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

// --- SCRIPT PARA COPIAR E-MAIL ---
document.addEventListener('DOMContentLoaded', () => {
    const btnCopiarEmail = document.getElementById('btnCopiarEmail');
    const textoBtnEmail = document.getElementById('textoBtnEmail');
    const email = 'britopintofillipe@gmail.com';

    if (btnCopiarEmail) {
        btnCopiarEmail.addEventListener('click', () => {
            navigator.clipboard.writeText(email).then(() => {
                // Sucesso!
                const textoOriginal = textoBtnEmail.innerText;
                textoBtnEmail.innerText = 'E-mail Copiado!';
                
                // Mudar o ícone para um "check"
                const icone = btnCopiarEmail.querySelector('i');
                icone.classList.remove('bi-copy');
                icone.classList.add('bi-check2-all');

                // Voltar ao texto original após 2 segundos
                setTimeout(() => {
                    textoBtnEmail.innerText = textoOriginal;
                    icone.classList.remove('bi-check2-all');
                    icone.classList.add('bi-copy');
                }, 2000);
            }).catch(err => {
                // Erro ao copiar
                console.error('Erro ao copiar e-mail: ', err);
                textoBtnEmail.innerText = 'Erro ao copiar';
                 setTimeout(() => {
                    textoBtnEmail.innerText = email;
                }, 2000);
            });
        });
    }
});