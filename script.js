async function myFunction() {
    const local = document.getElementById('myContent'); // seleciona o elemento com o id myContent

    const result = await fetch('https://api.randomuser.me/?results=12'); // "espere/aguarde" o fetch(serve para acessar/escrever dados em apis externas)  |  url da API

    const data = await result.json(); // JSON estrutura dados em formato de texto e permite a troca de dados entre as aplicações de forma simples e leve

    const myArray = data.results;


    for(i = 0; i < myArray.length; i++) { // for pra passar por todos os dados desejados

        const name = myArray[i].name.first;
        const secondName = myArray[i].name.last;
        const email = myArray[i].email;

        const divMyCard = document.createElement('div');
        local.appendChild(divMyCard);

        const myTitle = document.createElement('h2');
        myTitle.innerText = `${name} ${secondName}`;
        local.appendChild(myTitle);

        const myParagraph = document.createElement('p');
        myParagraph.innerText = email;
        divMyCard.appendChild(myParagraph);


    }
    console.log(myArray)
}

myFunction();
