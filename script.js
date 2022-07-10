const mainDiv = document.getElementById('tabela-div');
const primeiraCor = document.querySelector('.black');
const segundaCor = document.querySelector('.violet');
const terceiraCor = document.querySelector('.pink');
const quartaCor = document.querySelector('.gold');
const colorPalette = document.querySelector('.color');
const clearBtn =document.querySelector('.button');

// Cria tabela com o tamanho de 5x5

function criarTabela() {
  const tabela = document.createElement('table');
  tabela.setAttribute('id', 'pixel-board');
  mainDiv.appendChild(tabela);
  for (let i = 0; i < 5; i += 1) {
    const linha = document.createElement('tr');
    tabela.appendChild(linha);
    for (let y = 0; y < 5; y += 1) {
      const coluna = document.createElement('td');
      coluna.setAttribute('class', 'pixel');
      linha.appendChild(coluna);
    }
  }
}
criarTabela();

// cor preta inicial 

window.onload = () => {
  primeiraCor.classList.add('selected');
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = 'rgb(0, 0, 0)';
    });
  }
};

primeiraCor.addEventListener('click', () => {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].classList.remove('selected');
  }
  primeiraCor.classList.add('selected');
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = 'rgb(0, 0, 0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ';
    });
  }
});

segundaCor.addEventListener('click', () => {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].classList.remove('selected');
  }
  segundaCor.classList.add('selected');
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = 'rgb(148,0,211)';
    });
  }
});

terceiraCor.addEventListener('click', () => {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].classList.remove('selected');
  }
  terceiraCor.classList.add('selected');
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = 'rgb(255,20,147)';
    });
  }
});

quartaCor.addEventListener('click', () => {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].classList.remove('selected');
  }
  quartaCor.classList.add('selected');
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = 'rgb(255,215,0)';
    });
  }
});

clearButton.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
});