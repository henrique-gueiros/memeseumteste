const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function forcedReload() {
    location.reload(true); // Força o reload da página ignorando o cache
}

document.addEventListener("DOMContentLoaded", function () {
    const likeIcons = document.querySelectorAll(".like-icon");
    const deleteForms = document.querySelectorAll(".delete-form");

    // Função para curtir memes
    likeIcons.forEach(icon => {
        const memeId = icon.dataset.memeId;

        // Verifica no localStorage se o meme já foi curtido
        if (localStorage.getItem(`liked-${memeId}`) === "true") {
            icon.classList.add("liked");
            icon.classList.replace("ri-heart-line", "ri-heart-fill");
        }

        icon.addEventListener("click", () => {
            if (icon.classList.contains("liked")) {
                icon.classList.remove("liked");
                icon.classList.replace("ri-heart-fill", "ri-heart-line");
                localStorage.removeItem(`liked-${memeId}`);
            } else {
                icon.classList.add("liked");
                icon.classList.replace("ri-heart-line", "ri-heart-fill");
                localStorage.setItem(`liked-${memeId}`, "true");
            }
        });
    });

    // Função para remover meme com animação antes de excluir
    deleteForms.forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const memeCard = form.closest(".meme-card");
            memeCard.classList.add("removing");

            setTimeout(() => {
                form.submit();
            }, 500);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("meme-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close-btn");

    // Seleciona todas as imagens de meme
    const memeImages = document.querySelectorAll(".meme-image img");

    // Garante que o modal esteja oculto ao carregar a página
    modal.style.display = "none";

    // Adiciona evento de clique a cada imagem de meme
    memeImages.forEach(img => {
        img.addEventListener("click", function () {
            console.log("Imagem clicada"); // Adicione um log para ver quando isso acontece
            modal.style.display = "flex";  // Torna o modal visível
            modalImg.src = this.src;      // Coloca a imagem da meme no modal
            captionText.innerHTML = this.alt; // Coloca a legenda
        });
    });

    // Fechar o modal ao clicar no botão "X"
    closeBtn.addEventListener("click", function () {
        console.log("Modal fechado"); // Adicione um log para verificar
        modal.style.display = "none";  // Oculta o modal
    });

    // Fechar o modal ao clicar fora da imagem
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            console.log("Clique fora da imagem"); // Adicione um log para verificar
            modal.style.display = "none";  // Oculta o modal
        }
    });
});