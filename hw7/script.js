console.log('Hello :)')
let buttonElement = document.querySelector('#btn')
buttonElement.style.display = "block"


btn.onclick = function() {
    getResponse()
}

async function getResponse() {
    console.log('запит почався')
    let response = await fetch('http://localhost:8080/users')

    console.log(response)
    let content = await response.json()

    let list = document.querySelector('.posts')
    let key
    for (key in content) {
        list.innerHTML += `
            
                <h1>Id:${' ' + content[key].id}</h1>
                <p>Name:${' ' +content[key].first_name}</p>
                <p>Lastname:${' ' +content[key].last_name}</p>
                <p>Email:${' ' +content[key].email}</p>
                <img src="${content[key].photo}">
            
        `

        console.log(content[key])
    }
    console.log('запит закінчився')
}

//getResponse()