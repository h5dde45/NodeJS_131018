const colors = ['red', 'green', 'blue', 'yellow', 'color', 'black'];

const addButton = () => {
    const container = document.querySelector("#container");
    const button = document.createElement("button");

    button.innerHTML = "Click";
    button.onclick = () => button.style.color = colors[Math.round(Math.random() * (colors.length - 1))];
    container.append(button);
};
