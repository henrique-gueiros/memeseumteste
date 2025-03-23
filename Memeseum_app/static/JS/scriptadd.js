const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("memeForm");
    const nomeInput = document.getElementById("nome");
    const descricaoInput = document.getElementById("descricao");
    const anoInput = document.getElementById("ano");
    const imagemInput = document.getElementById("imagem");
    const previewImage = document.getElementById("previewImage");
    const submitButton = document.getElementById("submitButton");
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    // Efeito de feedback ao digitar
    function addFocusEffect(input) {
        input.addEventListener("focus", () => input.style.borderColor = "#B43B12");
        input.addEventListener("blur", () => input.style.borderColor = "#8A2A04");
    }

    addFocusEffect(nomeInput);
    addFocusEffect(descricaoInput);
    addFocusEffect(anoInput);

    // Atualizar pré-visualização da imagem antes do upload
    imagemInput.addEventListener("change", function () {
        const file = imagemInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Validação do formulário antes do envio
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        errorMessage.textContent = ""; // Limpa mensagens anteriores

        if (!nomeInput.value.trim()) {
            errorMessage.textContent = "O nome do meme é obrigatório!";
            return;
        }

        if (!descricaoInput.value.trim()) {
            errorMessage.textContent = "A descrição não pode estar vazia!";
            return;
        }

        if (!anoInput.value.trim() || anoInput.value < 1900 || anoInput.value > new Date().getFullYear()) {
            errorMessage.textContent = "Ano inválido!";
            return;
        }

        // Animação do botão ao enviar
        submitButton.classList.add("loading");
        submitButton.textContent = "Enviando...";

        setTimeout(() => {
            submitButton.classList.remove("loading");
            submitButton.textContent = "Enviar";
            successMessage.classList.remove("hidden");

            // Enviar o formulário após validação e animação
            form.submit();
        }, 1500);
    });
});