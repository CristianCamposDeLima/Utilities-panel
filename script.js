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


})