


//tabuleiro
const tabuleiroDOM = document.querySelector('.tabuleiro');



for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        
        let quadrado = document.createElement("div");
        quadrado.className = "quadrado";
        quadrado.id = "quadrado-" + i + "-" + j; // adiciona o atributo id ao elemento
        tabuleiroDOM.appendChild(quadrado);
        
    }
}

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let quadrado = document.getElementById("quadrado-" + i + "-" + j);
        if ((i + j) % 2 == 0) {
            quadrado.style.backgroundColor = "black";
        } else {
            quadrado.style.backgroundColor = "white";
        }
    }
}


//peças

    //peao
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let peao = document.getElementById("quadrado-" + i + "-" + j);
        if (i == 1 && j >= 0 && j <= 7) {
            peao.style.fontSize='80px'
            peao.style.alignItems='center'
            peao.style.textAlign='center'
            peao.style.color='#0081C9'
            peao.innerHTML = '&#9817';
        }
    }

}

pecas();


for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let peao = document.getElementById("quadrado-" + i + "-" + j);
        if (i == 6 && j >= 0 && j <= 7) {
            peao.style.fontSize='80px'
            peao.style.alignItems='center'
            peao.style.textAlign='center'
            peao.style.color='#6C00FF'
            peao.innerHTML = '&#9817';
        }
    }
}




