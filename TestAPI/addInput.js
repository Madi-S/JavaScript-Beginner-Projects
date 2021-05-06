payloadCounter = 2
document.querySelector('#addPayloadBtn')
    .addEventListener('click', () => {
        const values = [...document.querySelectorAll('input')].map(input => input.value)

        document.querySelector('#payload')
            .innerHTML += `<label for="payload${payloadCounter}" class="form-label">Key-Value pair #${payloadCounter}</label>
                            <input type="text" class="form-control key" id="payload${payloadCounter}" placeholder="Key">
                            <input type="text" class="form-control value" placeholder="Value">
                            <hr>`

        let j = 0
        const inputs = document.querySelectorAll('input')
        for (let value of values) {
            inputs[j].value = value
            ++j
        }

        ++payloadCounter
    })