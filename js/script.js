document= addEventListener("DOMContentLoaded", function(){
    const  contactFrom = document.getElementById ("login"); 
    const nameInput = document.getElementById ("name");
    const senhaInput = document.getElementById ("senha");
    const nameError = document.getElementById ("name-error");
    const senhaError = document.getElementById ("senha-error");

    

    contactFrom.addEventListener("submit", function(event) {
        let isValid = true;
        nameError.textContent = "";
        senhaError.textContent = "";

        if (nameInput.value === "") {
            nameError.textContent = "Por favor, insira o seu nome.";
            isValid =  false
        }

        const senhaPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!senhaPattern.test(senhaInput.value)) {
            senhaError.textContent = "Por favor, insira uma senha.";
            isValid = false
        }
    
        if(isValid) {
            event.preventDefault(); //impede o envio do formulario se houver erros
        }

    });

});