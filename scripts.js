const button = document.querySelector("button");
const inputMin = document.querySelector(".input-min");
const inputMax = document.querySelector(".input-max");
const resultado = document.querySelector(".resultado");

button.addEventListener("click", () => {
    const min = Math.ceil(Number(inputMin.value));
    const max = Math.floor(Number(inputMax.value));

    if (inputMin.value === "" || inputMax.value === "") {
        resultado.textContent = "⚠️ Por favor, preencha os dois campos!";
        resultado.style.color = "#d62828";
        return;
    }

    if (isNaN(min) || isNaN(max)) {
        resultado.textContent = "⚠️ Valores inválidos!";
        resultado.style.color = "#d62828";
        return;
    }

    if (min >= max) {
        resultado.textContent = "⚠️ O número mínimo deve ser menor que o máximo.";
        resultado.style.color = "#d62828";
        return;
    }

    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    resultado.innerHTML = `🎉 Número sorteado: <span style="color:rgb(0, 0, 0); font-weight: bold;">${numeroSorteado}</span>`;
    resultado.style.color = "#1b4b5a";


    setTimeout(() => {
        inputMin.value = "";
        inputMax.value = "";
    }, 10000);
});
