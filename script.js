const key = "dcad43506c677dbfb1d50dbd58e67801";

function visualizarTela(dados) {
  console.log(dados);
  document.querySelector(".city").innerHTML = "tempo em " + dados.name;
  document.querySelector(".temperatura").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".parcial-tempo")
    .innerHTML = dados.weather[0].description;
  document.querySelector(".umidade").innerHTML = dados.main.humidity + "%";
  document.querySelector(".icon-temp").src =
    `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
  ${cidade}&appid=${key}&lang=pt_br&units=metric`).then((response) =>
    response.json()
  );
  visualizarTela(dados);
}
function clickButton() {
  const cidade = document.querySelector(".input-city").value;

  buscarCidade(cidade);
}
