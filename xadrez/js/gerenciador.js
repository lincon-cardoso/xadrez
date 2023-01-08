//tabuleiro
const tabuleiroDOM = document.querySelector('.tabuleiro');

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let quadrado = document.createElement('div');
    quadrado.className = 'quadrado';
    quadrado.id = 'quadrado-' + i + '-' + j; // adiciona o atributo id ao elemento
    tabuleiroDOM.appendChild(quadrado);
  }
}

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let quadrado = document.getElementById('quadrado-' + i + '-' + j);
    if ((i + j) % 2 == 0) {
      quadrado.style.backgroundColor = '#c0c0c0';
    } else {
      quadrado.style.backgroundColor = 'white';
    }
  }
}

//peças

//peao
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let peao = document.getElementById('quadrado-' + i + '-' + j);
    if (i == 1 && j >= 0 && j <= 7) {
      peao.style.fontSize = '80px';
      peao.style.alignItems = 'center';
      peao.style.textAlign = 'center';
      // peao.style.color = '#0081C9';
      peao.innerHTML = '&#9823';
    }
  }
}

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let peao = document.getElementById('quadrado-' + i + '-' + j);
    if (i == 6 && j >= 0 && j <= 7) {
      peao.style.fontSize = '80px';
      peao.style.alignItems = 'center';
      peao.style.textAlign = 'center';
      // peao.style.color = '#6C00FF';
      peao.innerHTML = '&#9817';
    }
  }
}

//Torres

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let torre = document.getElementById('quadrado-' + i + '-' + j);
    if ((i == 0 && j == 0) || (i == 0 && j == 7)) {
      torre.style.fontSize = '80px';
      torre.style.alignItems = 'center';
      torre.style.textAlign = 'center';
      // torre.style.color = '#0081C9';
      torre.innerHTML = '&#9820';
    }
    if ((i == 7 && j == 0) || (i == 7 && j == 7)) {
      torre.style.fontSize = '80px';
      torre.style.alignItems = 'center';
      torre.style.textAlign = 'center';
      // torre.style.color = '#6C00FF';
      torre.innerHTML = '&#9814';
    }
  }
}

//cavalo

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let cavalo = document.getElementById('quadrado-' + i + '-' + j);
    if ((i == 0 && j == 1) || (i == 0 && j == 6)) {
      cavalo.style.fontSize = '80px';
      cavalo.style.alignItems = 'center';
      cavalo.style.textAlign = 'center';
      // cavalo.style.color = '#0081C9';
      cavalo.innerHTML = '&#9822; ';
    }
    if ((i == 7 && j == 1) || (i == 7 && j == 6)) {
      cavalo.style.fontSize = '80px';
      cavalo.style.alignItems = 'center';
      cavalo.style.textAlign = 'center';
      // cavalo.style.color = '#6C00FF';
      cavalo.innerHTML = '&#9816;';
    }
  }
}

//bispo

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let bispo = document.getElementById('quadrado-' + i + '-' + j);
    if ((i == 0 && j == 2) || (i == 0 && j == 5)) {
      bispo.style.fontSize = '80px';
      bispo.style.alignItems = 'center';
      bispo.style.textAlign = 'center';
      // bispo.style.color = '#0081C9';
      bispo.innerHTML = '&#9821; ';
    }
    if ((i == 7 && j == 2) || (i == 7 && j == 5)) {
      bispo.style.fontSize = '80px';
      bispo.style.alignItems = 'center';
      bispo.style.textAlign = 'center';
      // bispo.style.color = '#6C00FF';
      bispo.innerHTML = '&#9815;';
    }
  }
}

//rainha preta e branca
let rainhaPreta = document.getElementById('quadrado-' + 0 + '-' + 3);
rainhaPreta.style.fontSize = '80px';
rainhaPreta.style.alignItems = 'center';
rainhaPreta.style.textAlign = 'center';
rainhaPreta.innerHTML = '&#9819; ';
let rainhaBranca = document.getElementById('quadrado-' + 7 + '-' + 3);

rainhaBranca.style.fontSize = '80px';
rainhaBranca.style.alignItems = 'center';
rainhaBranca.style.textAlign = 'center';
rainhaBranca.innerHTML = '&#9813; ';


//rei branco e preto 

let reiBranco = document.getElementById('quadrado-' + 0 + '-' + 4);
reiBranco.style.fontSize = '80px';
reiBranco.style.alignItems = 'center';
reiBranco.style.textAlign = 'center';
reiBranco.innerHTML = '&#9818; ';


let reiPreto = document.getElementById('quadrado-' + 7 + '-' + 4);

reiPreto.style.fontSize = '80px';
reiPreto.style.alignItems = 'center';
reiPreto.style.textAlign = 'center';
reiPreto.innerHTML = '&#9812; ';



//Criar movimentação