document.documentElement.style.setProperty('--backgroud-nuvem', 'white');
document.documentElement.style.setProperty('--backgroud-horario', '#1b1b1b');
const form = document.querySelector("form");
const inputCidade = document.getElementById("cidade");
const textoClima = document.querySelector("form p");
const tituloClima = document.querySelector("form h2");

const sol = document.querySelector(".sol");
const lua = document.querySelector(".lua");

const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const n3 = document.querySelector(".n3");
const n4 = document.querySelector(".n4");

let clima;
let horario;
let cidade;


function puxarDadosClima() {
    fetch(`https://api.weatherstack.com/current?access_key=245b8e0ba7448ef83add49d4d5fef95b&query=${cidade}`)
    .then(dados => dados.json())
    .then(dados => {
        // console.log(dados);
        clima = dados.current.weather_descriptions[0];
        horario = dados.current.is_day

        if (horario == "no"){
            document.documentElement.style.setProperty('--backgroud-horario', '#1b1b1b');
            lua.style.display = "flex"
            sol.style.display = "none"
            textoClima.innerHTML = "Estrelado"
        }
        else{
            document.documentElement.style.setProperty('--backgroud-horario', '#99d9ea');
            sol.style.display = "flex"
            lua.style.display = "none"
            textoClima.innerHTML = "Ensolarado"
        }

        if (clima == "Clear" || clima == "Sunny" || clima == "Partly cloudy" || clima == "Overcast" || clima == "Fog"){
            document.documentElement.style.setProperty('--backgroud-nuvem', 'white');
            document.body.style.backgroundImage = "none"
            n1.style.left = "10%";
            n2.style.left = "80%";
            n3.style.left = "60%";
            n4.style.left = "15%";
        }
        else if (horario == "yes"){
            document.documentElement.style.setProperty('--backgroud-horario', '#679291');
            document.documentElement.style.setProperty('--backgroud-nuvem', '#535353');
            document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/91/95/f4/9195f4dd1b69f90038f627c8af422429.gif")'
            n1.style.left = "40%";
            n2.style.left = "25%";
            n3.style.left = "50%";
            n4.style.left = "60%";
            textoClima.innerHTML = "Chuvoso"
        }
        else{
            document.documentElement.style.setProperty('--backgroud-nuvem', '#535353');
            document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/91/95/f4/9195f4dd1b69f90038f627c8af422429.gif")'
            n1.style.left = "40%";
            n2.style.left = "25%";
            n3.style.left = "50%";
            n4.style.left = "60%";
            textoClima.innerHTML = "Chuvoso"
        }


    })
    .catch(error => {
        console.error('Erro ao buscar dados do clima:', error);
    });
}


form.addEventListener("submit",e=>{
    e.preventDefault();
    cidade = inputCidade.value
    puxarDadosClima();
    tituloClima.innerHTML = `Clima em ${cidade}`
});


