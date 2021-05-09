import {questionInputIsValid} from './utils'
import './styles.css'

console.log('App is running!')

const form = document.getElementById('questionForm')
const input = form.querySelector('#questionInput')
const submitBtn = form.querySelector('#submitQuestionBtn')


form.addEventListener('submit', submitQuestionFormHandler)
input.addEventListener('input', lockBtn)

function lockBtn(event) {
    submitBtn.disabled = !questionInputIsValid(input.value)
}


function submitQuestionFormHandler(event) {
    event.preventDefault()

    if (questionInputIsValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }

        submitBtn.disabled = true

        // Async request to server to store user's question
        console.log('Question:', question)

        input.value = ''
        input.className = ''
        // submitBtn.disabled = false
    }

}
