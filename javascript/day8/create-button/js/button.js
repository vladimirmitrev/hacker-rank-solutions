let button = document.getElementById('btn');

const addOneToButton = () => {
    let newValue = Number(button.textContent) + 1;
    button.textContent = newValue;;
};