//Nome do usuário
let username = prompt('Olá, qual é o seu nome?')
const salutations = document.querySelector('h1.salutations')
salutations.innerHTML = `Sudações, ${username}!`

//Pegando a hora atual
setInterval ( ()=> {
    const hours = document.querySelector('div#hours')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    hora = hora <= 9 ? '0' + hora : hora
    minutos = minutos <= 9 ? '0' + minutos : minutos
    segundos = segundos <= 9 ? '0' + segundos : segundos

    hours.innerHTML = `${hora}:${minutos}:${segundos}`

    //condicional para definir saudação de acordo com a hora
    if (hora >= 6 && hora <= 12) {
        if (username.length != 0) {
            salutations.innerHTML = `Bom dia, ${username}!`
        } else {
            salutations.innerHTML = 'Bom dia!'
        }
    } else if (hora > 12 && hora <= 18) {
        if (username.length != 0) {
            salutations.innerHTML = `Boa tarde, ${username}!`
        } else {
            salutations.innerHTML = 'Boa tarde!'
        }
    } else {
        if (username.length != 0) {
            salutations.innerHTML = `Boa noite, ${username}!`
        } else {
            salutations.innerHTML = 'Boa noite!'
        }
    }
    //data
    const weekday = document.querySelector('div#week-day')
    let wday = data.getDay()
    wday = wday == 0 ? 'Domingo' : wday
    wday = wday == 1 ? 'Segunda-feira' : wday
    wday = wday == 2 ? 'Terça-feira' : wday
    wday = wday == 3 ? 'Quarta-feira' : wday
    wday = wday == 4 ? 'Quinta-feira' : wday
    wday = wday == 5 ? 'Sexta-feira' : wday
    wday = wday == 6 ? 'Sabado' : wday
    weekday.innerHTML = `${wday},`

    const day = document.querySelector('div#day')
    let dd = data.getDate()
    day.innerHTML = `${dd}`

    const monthyear = document.querySelector('div#month-year')
    let month = data.getMonth()
    month = month == 0 ? 'Janeiro' : month
    month = month == 1 ? 'fevereiro' : month
    month = month == 2 ? 'março' : month
    month = month == 3 ? 'abril' : month
    month = month == 4 ? 'maio' : month
    month = month == 5 ? 'Junho' : month
    month = month == 6 ? 'Julho' : month
    month = month == 7 ? 'agosto' : month
    month = month == 8 ? 'setembro' : month
    month = month == 9 ? 'outubro' : month
    month = month == 10 ? 'novembro' : month
    month = month == 11 ? 'dezembro' : month
    let year = data.getFullYear()
    monthyear.innerHTML = `de ${month} de ${year}`

})