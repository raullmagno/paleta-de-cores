let coresDaPaleta = document.getElementsByClassName("color");
//coresDaPaleta[0].style.backgroundColor = "black";

function addCoresPaleta() {
  for (let i = 0; i < coresDaPaleta.length; i += 1) {
    if (coresDaPaleta[i] === coresDaPaleta[0]) {
      coresDaPaleta[0].style.backgroundColor = "black";
    } else if (coresDaPaleta[i] === coresDaPaleta[1]) {
      coresDaPaleta[1].style.backgroundColor = "green";
    } else if (coresDaPaleta[i] === coresDaPaleta[2]) {
      coresDaPaleta[2].style.backgroundColor = "blue";
    }  else {
      coresDaPaleta[3].style.backgroundColor = "yellow";
    }
  }
} addCoresPaleta();