function verification() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.querySelector("#txtano");
  let res = document.querySelector("#res");

  if (fano.value.length == 0 || fano.value > ano) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "pic");
    if (fsex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade <= 10) {
        img.setAttribute("src", "assets/foto-bebe-m.png");
      } else if (idade < 21) {
        img.setAttribute("src", "assets/foto-jovem-m.png");
      } else if (idade < 50) {
        img.setAttribute("src", "assets/foto-adulto-m.png");
      } else {
        img.setAttribute("src", "assets/foto-idoso-m.png");
      }
    } else if (fsex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade <= 10) {
        img.setAttribute("src", "assets/foto-bebe-f.png");
      } else if (idade < 21) {
        img.setAttribute("src", "assets/foto-jovem-f.png");
      } else if (idade < 50) {
        img.setAttribute("src", "assets/foto-adulto-f.png");
      } else {
        img.setAttribute("src", "assets/foto-idoso-f.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
