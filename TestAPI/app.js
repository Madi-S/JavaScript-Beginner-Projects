function getURL() {
    return document.querySelector('#urlInput').value
}

function getMethod() {
    const select = document.querySelector('#method')
    return select.options[select.selectedIndex].text
}

function getPayload() {
    function getKeys() {
        return [...document.querySelectorAll('.key')].map(element => element.value)
    }

    function getValues() {
        return [...document.querySelectorAll('.value')].map(element => element.value)
    }

    const keys = getKeys()
    const values = getValues()
    const payload = {}
    let i = 0

    for (let key of keys) {
        payload[key] = values[i]
        ++i
    }
    return payload
}

function displayResponse(response) {
    console.log('in display', response)
    document.querySelector('#response').value = JSON.stringify(response)
}

document.querySelector('#sendRequestBtn')
    .addEventListener('click', () => {
        const url = getURL()
        const method = getMethod()
        const payload = getPayload()

        console.log(url)
        console.log(method)
        console.log(payload)

        fetch(url,method === 'GET' ? {method: method, headers: {'Content-Type': 'application/json'}} : {method: method, headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload)}
        )
            .then(response => response.json())
            .catch(error => alert(error))
            .then(json => displayResponse(json))
    })