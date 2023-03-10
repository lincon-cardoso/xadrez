//tabuleiro
const tabuleiroDOM = document.querySelector('.tabuleiro');

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let quadrado = document.createElement('div');
    quadrado.className = 'quadrado ';
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

//Cria movimento


const quadrados = document.querySelectorAll('.quadrado');
for (const quadrado of quadrados) {
  quadrado.addEventListener('click', (event) => {
    cordenadaMapa(event)
    pegaPeca()
    
    
  });
}


function pegaPeca(){
  
  let cordenadas = JSON.parse(localStorage.getItem('key'));
  if (!cordenadas) return;



  console.log(cordenadas.peca);
}







//captura click do movimento
function cordenadaMapa(event) {
  const idLocal = event.target.id;
  const peca = event.target.textContent;

  const cordenadas = {
    id: idLocal,
    peca: peca,
  };

  localStorage.setItem('key', JSON.stringify(cordenadas));
  return cordenadas;
}













// //move peça de lugar
// function movePeca() {
//   let cordenadas = JSON.parse(localStorage.getItem('key'));
//   if (!cordenadas) return;

//   let el = document.getElementById(cordenadas);
  
//   console.log(el);



// }


// function setPosicaoPeca(cordenadas) {
//   localStorage.setItem("id", cordenadas.idLocal);
//   localStorage.setItem("peca", cordenadas.peca);

//   return setPosicaoPeca;
// }

// function criaPeca(idPeca,elemento) {

//   let novaPeca = elemento.cloneNode();
//   novaPeca.id = idPeca;
//   // Adiciona a nova peça ao outro ponto clicado
//   outroPontoClicado.appendChild(novaPeca);
// }

// criaPeca(idPeca)

// console.log(idPeca)
// vazio(idPeca);
// function vazio(idPeca) {
//   if (idPeca === '') {
//     console.log("nao tem peça");
//   } else {
//     console.log("tem peça");
//   }
// }

// let = novaPeca = document.createElement('div');
// novaPeca.className = 'quadrado';
// novaPeca.id = idPeca.id;
// novaPeca.appendChild(document.querySelector(idPeca));
// let quadrado = document.createElement('div');
// quadrado.className = 'quadrado';
// quadrado.id = 'quadrado-' + i + '-' + j; // adiciona o atributo id ao elemento
// tabuleiroDOM.appendChild(quadrado);

// console.log(cordenadas.id, cordenadas.peca);
// Define the cordenadas variable outside the event listener
// for (const quadrado of quadrados) {
//   quadrado.addEventListener('click', (event) => {
//     console.log(event.target);
//   });
// }

//Criar movimentação

// console.log(event.target.textContent);
// function createAndAppendElement(peca, id) {
//   // Create the div element
//   const div = document.createElement('div')
//   div.className = id;
//   div.innerHTML = peca;

//   // Select the element where you want to append the new div
//   const container = document.querySelectorAll('.quadrado');

//   // Append the new div to the container
//   container.appendChild(div);
// }
// const novapeca = document.createElement('div');
// novapeca.className = ;
// novapeca.innerText = id;

//  console.log(novapeca.className)

//   const newDiv = document.createElement('div');
//   newDiv.classList = 'quadrado'
//   newDiv.id = id;
//   newDiv.textContent= id
//   newDiv.innerText = peca;

// // return newDiv

// function createCopy() {
//   //recupera peça guardada
//   let storedPiece = JSON.parse(localStorage.getItem("key"));
//   if (!storedPiece) return;

//   // seleciona a peça guardada
//   let piece = storedPiece.peca;

//   // cria uma nova div
//   let copyDiv = document.createElement("div");

//   // adiciona o conteúdo da peça selecionada à nova div
//   copyDiv.innerHTML = piece;

//   // adiciona a nova div ao documento
//   document.body.appendChild(copyDiv);
// }

// function movePeca() {
//   if(!localStorage.getItem("key")) return;

//   const cordenadas = JSON.parse(localStorage.getItem("key"));
//   const peca = cordenadas.peca;
//   const  id = cordenadas.id;

//   let div = document.createElement("div");
//   div.classList = "quadrado";
//   div.id = id;
//   div.setAttribute("peca", peca);

//   let parent = document.querySelector("#" + id);
//   if (!parent) return;
//   parent.parentNode.replaceChild(div, parent);

// }

// function createCopy() {
//   //recupera peça guardada
//   let storedPiece = JSON.parse(localStorage.getItem("key"));
//   if (!storedPiece) return;

//   // seleciona a peça guardada
//   let piece = storedPiece.peca;

//   // cria uma nova div
//   let copyDiv = document.createElement("div");

//   // adiciona o conteúdo da peça selecionada à nova div
//   copyDiv.innerHTML = piece;

//   // adiciona a nova div ao documento
//   document.body.appendChild(copyDiv);
// }
// console.log(copyDiv);

// document.querySelectorAll('.quadrado').forEach(element => {
//   element.addEventListener('click', updateElement);
// });

// function updateElement(event) {
//   let cordenadas = JSON.parse(localStorage.getItem('key'));
//   if (!cordenadas) return;

//   let  peca = cordenadas.peca;
//   let  id = cordenadas.id;

//   // event.target.setAttribute('id', id);
//   // event.target.setAttribute('peca', peca);
//   // event.target.textContent = peca + ' '+ id;

//   console.log(id);

// }

//   document.body.addEventListener("click", function(event){
//     if(event.target.classList.contains('quadrado')){
//         const peca = event.target.getAttribute('peca');
//         const id = event.target.id;
//         let copyDiv = document.createElement('div');
//         copyDiv.innerHTML = peca;
//         copyDiv.classList = 'quadrado';
//         copyDiv.id = id;
//         copyDiv.setAttribute('peca', peca);
//         event.target.parentNode.appendChild(copyDiv);
//     }
// });
// let cordenadas = JSON.parse(localStorage.getItem('key'));
// if (!cordenadas) return;

// const peca = cordenadas.peca;
// const id = cordenadas.id;

// let copyDiv = document.createElement('div');
// copyDiv.innerHTML = peca;
// copyDiv.classList = 'quadrado';
// copyDiv.id = id;
// copyDiv.setAttribute('peca', peca);

// copyDiv.copyDiv.appendChild(copyDiv);


// let cordenadas = JSON.parse(localStorage.getItem('key'));
// if (!cordenadas) return;

// const peca = cordenadas.peca;
// const id = cordenadas.id;

// console.log(copyDiv);