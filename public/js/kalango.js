let formButton = document.getElementById("formButton");
let formInputCity = document.getElementById("input-city")
let resultContent = document.getElementById("result-content")


formButton.addEventListener("click", onClickEvent) 

function onClickEvent(event) {

    let cidade = formInputCity.value
    let apiKey = "974257ade73da8ff79468d5f0d994126"

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${apiKey}`

    fetch(url)
        .then(function(response){
            return response.json()
        }).then(function(json){

            let codigo = json.cod

            let cidade = json.name
            let pais = json.sys.country
            let descricao = json.weather[0].description
            let temp = json.main.temp
            let tempMax = json.main.temp_max
            let feelslike = json.main.feels_like
            let humidity = json.main.humidity
            let wind = json.wind.speed
            let pressure = json.main.pressure

            

            // console.log(`A temperatura em ${cidade} é de ${temp} °C`)
            if (codigo == 200) {
                
            }

            let html= `<h1>  <b>${cidade}, ${pais}</b></h1>`
            html += `<h2>${parseInt(temp)}°C</h2>`
            html += `<h2>Sensação Termica de ${parseInt(feelslike)}°C, ${descricao}</h2>`
            html += `
            <ul>
                <li>Ventos: ${wind} Km/h</li>
                <li>Umidade: ${humidity}%</li>
                <li>Maxima: ${tempMax}°C</li>
                <li>Pressão: ${pressure} hPa</li>
            </ul>`



            document.getElementById("result-content").innerHTML = html;

            changeImage(descricao)

        })
        
        function changeImage(x) {

            if (x == "céu limpo") {document.getElementById("rain").src = "public/img/01d.png"}
            else if (x == "algumas nuvens"){document.getElementById("rain").src = "public/img/02d.png"}
            else if (x == "nuvens dispersas"){document.getElementById("rain").src = "public/img/03d.png"}
            else if (x == "nublado"){document.getElementById("rain").src = "public/img/04d.png"}
            else if (x == "chuva leve"){document.getElementById("rain").src = "public/img/09d.png"}
            else if (x == "chuva"){document.getElementById("rain").src = "public/img/10d.png"}
            else if (x == "trovoadas"){document.getElementById("rain").src = "public/img/11d.png"}
            else if (x == "neve"){document.getElementById("rain").src = "public/img/13d.png"}
            else if (x == "nevoa"){document.getElementById("rain").src = "public/img/50d.png"}

        }


}