const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

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