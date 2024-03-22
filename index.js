


function guess(){
    const numberOfDices = document.getElementById("userInput").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    let values = [];
    let images = [];

    for(let i = 0; i < numberOfDices; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="imgs/${value}.png" alt="dice ${value}">\n`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`
    diceImages.innerHTML = images.join('');
    
}